<?php

namespace App\Http\Controllers;

use App\Order;
use App\traits\toHashMap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\OrdersResource;
class OrdersController extends Controller
{
    use toHashMap;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(OrdersResource::collection(Order::whereHas('products')->with('products')->get()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['order_number' =>'unique:orders|max:45|required']);
        $order  = Order::create($request->except('product_id'));
        $order->products()->attach($request->get('product_id'));
        return response()->json($order->with('products')->find($order->id));
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

        $order = Order::with('products')->find($id);
        $order->update($request->except(['product_id','date_created']));
        $order->products()->sync($request->get('product_id'));
        return response()->json($order);
    }

    public function show($id)
    {
        return response('ooo');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::find($id);

        DB::table('order_details')
            ->where('order_id',$id)
            ->whereIn('product_id',self::items($order->products))
            ->update(array('deleted_at'=>DB::raw('NOW()')));

        Order::destroy($id);
        return response()->json($id);
    }
}
