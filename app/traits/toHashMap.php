<?php
/**
 * Developer: vinnyvinny on 19 March 2021 at 10:29
 */

namespace App\traits;


trait toHashMap
{
    public static function items($data=array(),$key='id')
    {
        $output = array();

        foreach ($data as  $item){
            if (is_object($item)){
                if (!isset($output[$item->$key])){
                    $output[$item->$key] = $item->$key;
                }
            }else if (is_array($item)){
                if (!isset($output[$item[$key]])){
                    $output[$item[$key]] = $item[$key];
                }
            }
        }

        return $output;
    }

}
