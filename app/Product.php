<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $appends = ['date_created'];

    public function suppliers()
    {
    return $this->belongsToMany(Supplier::class,'supplier_products')
        ->whereNull('supplier_products.deleted_at')
        ->withTimestamps();
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function getDateCreatedAttribute()
    {
        return Carbon::parse($this->created_at)->format('Y-m-d');
    }
}
