<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Movie;
use Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Requests\CreateMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use App\Http\Traits\MovieTrait;

class MovieController extends Controller
{
    use MovieTrait;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show', 'movieSearch', 'getTopViewedMovies']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $movies = Movie::with(['user', 'genres'])->orderBy('id', 'desc')->paginate(10);
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
    public function store(CreateMovieRequest $request)
    {
        try{
            $request->uploadMovieImage()->createMovie();
            return response()->json(['movie' => $request->movie], 201);
        }catch(\Exception $e){
            return Response::json([
                'message' => $e->getMessage()
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
            $movie = Movie::with(['actors', 'user', 'genres', 'company'])->findOrFail($id);
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
    public function update(UpdateMovieRequest $request, $id)
    {
        try{
            $movie = Movie::findOrFail($id);
            if(auth()->user()->id === $movie->user->id){
                $request->updateMovie($movie);
                return Response::json(null, 204);
            }
            return Response::json(['message' => 'Unauthorized.'], 401);
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
            if(auth()->user()->id === $movie->user->id){
                $movie->delete();
                return Response::json(null, 204);
            }
            return Response::json(['message' => 'Unauthorized.'], 401);
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
