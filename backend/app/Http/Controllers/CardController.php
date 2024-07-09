<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use App\Jobs\DownloadCardImage;

class CardController extends Controller
{
    public function index()
    {
        return response()->json(Card::all());
    }

    public function store(Request $request)
    {
        $set = $request->input('set');
        $response = Http::get("https://api.scryfall.com/cards/search?q=set:$set");

        if ($response->successful()) {
            $cards = $response->json()['data'];
            DB::transaction(function () use ($cards, $set) {
                foreach ($cards as $cardData) {
                    $card = Card::updateOrCreate(
                        ['name' => $cardData['name'], 'set' => $set],
                        ['image_url' => $cardData['image_uris']['small']]
                    );
                    if ($card->wasRecentlyCreated || $card->wasChanged()) {
                        DownloadCardImage::dispatch($card->image_url);
                    }
                }
            });
        }

        return response()->json(['message' => 'Cards fetched and stored successfully.']);
    }
}
