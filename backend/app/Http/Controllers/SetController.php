<?php

namespace App\Http\Controllers;

use App\Models\Set;
use Illuminate\Http\Request;

class SetController extends Controller
{
    public function index()
    {
        return response()->json(Set::all());
    }
}
