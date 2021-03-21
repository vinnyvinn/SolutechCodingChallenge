<?php

namespace App\Http\Controllers;

use App\Product;
use App\traits\toHashMap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    use toHashMap;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Product::with('suppliers')->get());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['name' =>'unique:products|max:45|required']);
        $product = Product::create($request->except('supplier_id'));
        $product->suppliers()->attach($request->get('supplier_id'));
        return response()->json($product->with('suppliers')->find($product->id));
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
        $product = Product::with('suppliers')->find($id);
        $product->update($request->except(['supplier_id','date_created']));
        $product->suppliers()->sync($request->get('supplier_id'));
        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        DB::table('supplier_products')
            ->where('product_id',$id)
            ->whereIn('supplier_id',self::items($product->suppliers))
            ->update(array('deleted_at'=>DB::raw('NOW()')));

        Product::destroy($id);
        return response()->json($id);
    }
}
