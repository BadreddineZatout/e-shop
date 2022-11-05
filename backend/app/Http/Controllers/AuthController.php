<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']], true)) {
            $token = $user->createToken('access-token');
            $request->session()->regenerate();

            return response()->json([
                'user' => $user->only(['id', 'name', 'email']),
                'token' => $token->plainTextToken,
            ], 200);
        }

        return response()->json('Register failed !', 400);
    }

    public function login(LoginRequest $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            $token = User::find(auth()->id())->createToken('access-token');
            $request->session()->regenerate();

            return response()->json([
                'user' => auth()->user()->only(['id', 'name', 'email']),
                'token' => $token->plainTextToken,
            ], 200);
        }

        return response()->json('Login failed !', 400);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json('Logged out!', 200);
    }
}
