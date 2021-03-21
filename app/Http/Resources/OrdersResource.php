<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class OrdersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'order_number' => $this->order_number,
            'date_created' => Carbon::parse($this->created_at)->format('Y-m-d'),
            'products' => $this->products,
            'product_items' => self::toString($this->products),

        ];
    }

    public static function toString($data)
    {
     $result = array();

     foreach ($data as $item){
         $result[] = $item->name;
     }

     return implode(",",$result);
    }
}
