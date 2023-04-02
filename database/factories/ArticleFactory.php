<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'=>$this->faker->text(),
            'image'=>$this->faker->imageUrl(),
            'content'=>$this->faker->realTExt(2000),
            'created_at'=>now(),
            'updated_at'=>now(),
            'created_by'=>1,
            'updated_by'=>1,
        ];
    }
}
