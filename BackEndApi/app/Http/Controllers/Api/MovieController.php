<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Movie;
use Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Requests\MovieRequest;

class MovieController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $movies = Movie::with('actors')->paginate(25);
            return Response::json($movies, 200);
        }catch(\Exception $e){
            return Response::json([
                'message' => "Error accured on server."
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MovieRequest $request)
    {
        try{
            $movie = Movie::create($request->all());
            return Response::json($movie, 201);
        }catch(\Exception $e){
            return Response::json([
                'message' => "Error accured on server."
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $movie = Movie::with('actors')->findOrFail($id);
            return Response::json($movie, 200);
        } catch(ModelNotFoundException $e){
            return Response::json([
                'message' => "Movie not found."
            ], 404);
        }catch(\Exception $e){
            return Response::json([
                'message' => "Error accured on server."
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $movie = Movie::findOrFail($id);
            $fields = ['movie', 'release_date'];

            foreach($fields as $field){
                //echo $request->$field;
                if($request->$field != null){
                    $movie->$field = $request->$field;
                }
            }
            $movie->save();
            return Response::json(null, 204);
        } catch(ModelNotFoundException $e){
            return Response::json([
                'message' => "Movie not found."
            ], 404);
        }catch(\Exception $e){
            return Response::json([
                'message' => "Error accured on server."
            ], 500);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $movie = Movie::findOrFail($id);
            $movie->delete();
            return Response::json(null, 204);
        } catch(ModelNotFoundException $e){
            return Response::json([
                'message' => "Movie not found."
            ], 404);
        }catch(\Exception $e){
            return Response::json([
                'message' => "Error accured on server."
            ], 500);
        }
    }
}
