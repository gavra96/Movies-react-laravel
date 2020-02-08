<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Role;
use Auth;
use Response;
use Lcobucci\JWT\Parser;

class AuthController extends Controller
{
    public function register(Request $request){
        $validatedData = $request->validate(
            [
                'name' => 'required|max:55',
                'email' => 'email|required|unique:users',
                'password' => 'required|confirmed'
            ]
        );
        $validatedData['password'] = bcrypt($request->password);
        $user = User::create($validatedData);
        $accesToken = $user->createToken('authToken')->accessToken;
        return Response::json(['user'=> $user, 'access_token'=>$accesToken]);
    }
    
    public function login (Request $request){
        $loginData = $request->validate(
            ['email' => 'email|required',
             'password' => 'required']
        );
        if(!auth()->attempt($loginData)){
            return Response::json([
                'message' => "invalid credentials."
            ], 401);
        }
        $accesToken = auth()->user()->createToken('authToken')->accessToken;
        return response(['user'=> auth()->user()->load('role'),
            'access_token'=>$accesToken ,
            'expireIn' => now()->addDays(2)]);
    }

    public function logoutApi(Request $request){ 
        $value = $request->bearerToken();
        $request->user()->token()->revoke();
    }

    public function getUserByToken()
    {
        return auth()->user()->load('role');
    }
}