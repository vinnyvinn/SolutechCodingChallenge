<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use SoftDeletes;

    protected $guarded = [];
    protected $appends = ['date_created'];

    public function products()
    {
       return $this->hasMany(Product::class);
    }

    public function getDateCreatedAttribute()
    {
     return Carbon::parse($this->created_at)->format('Y-m-d');
    }
}
