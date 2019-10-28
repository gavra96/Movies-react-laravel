<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Role;
use Response;

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
        return response(['user'=> $user, 'access_token'=>$accesToken]);
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
        return response(['user'=> auth()->user(),
            'access_token'=>$accesToken ,
            'expireIn' => now()->addDays(2)]);
    }

    public function logoutApi(){ 
        if (Auth::check()) {
        Auth::user()->AauthAcessToken()->delete();
        return Response::json([
            'message' => "Logout successfull."
            ], 200);
        }
        return Response::json(['message' => "You are not loged in."], 401);
    }
}