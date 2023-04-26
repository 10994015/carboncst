<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ForumResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'content'=>$this->content ?? '',
            'image_url'=>$this->image ?? '',
            'images_url'=>$this->images ?? '',
            'images'=>[],
            'hidden'=>$this->hidden ? true : false,
            'button_1'=>$this->button_1,
            'link_1'=>$this->link_1,
            'button_2'=>$this->button_2,
            'link_2'=>$this->link_2,
            'button_3'=>$this->button_3,
            'link_3'=>$this->link_3,
            'button_4'=>$this->button_4,
            'link_4'=>$this->link_4,
            'button_5'=>$this->button_5,
            'link_5'=>$this->link_5,
            'created_at'=>(new \DateTime($this->created_at))->format('Y-m-d H:i:s'),
            'updated_at'=>(new \DateTime($this->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}