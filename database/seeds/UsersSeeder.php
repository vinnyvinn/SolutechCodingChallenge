<?php
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        \App\User::create([
            'name' => 'Vincent Kituyi',
            'email' => 'admin@admin.com',
            'code_no' => $faker->numberBetween(1,1000),
            'title' => 'Software Engineer',
            'experience' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.',
            'education' => 'B.S. in Computer Science from Moi University',
            'location' => 'Nairobi, Kenya',
            'join_date' => now(),
            'email_verified_at' => now(),
            'password' => bcrypt('Qwerty123!'), // password
            'remember_token' => Str::random(10),
        ]);
        \App\User::create([
            'name' => 'VinnyVinny',
            'email' => 'kituyiv@gmail.com',
            'code_no' => $faker->numberBetween(1,1000),
            'title' => 'Super Admin',
            'experience' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.',
            'education' => 'B.S. in Computer Science from Moi University',
            'location' => 'Nairobi, Kenya',
            'join_date' => now(),
            'email_verified_at' => now(),
            'password' => bcrypt('Qwerty123!'), // password
            'remember_token' => Str::random(10),
        ]);
    }
}
