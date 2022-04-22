<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs"
import NewestRestaurants from "./../components/NewestRestaurants"
import NewestComments from "./../components/NewestComments"

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Tremaine Simonis",
      tel: "1-513-898-9528 x7804",
      address: "04053 Waelchi View",
      opening_hours: "08:00",
      description:
        "Qui quasi dolores dolorem odio et possimus voluptatem et. Soluta facere tempora porro autem tempora quasi. Deleniti debitis sint corporis laudantium necessitatibus numquam deserunt et quidem. Quis ut vel alias ipsa ipsam. Quis molestiae natus sequi commodi et quasi porro id. Et maxime consequuntur fugit vel dolor.\n \rBlanditiis sint cumque ullam dolor nesciunt maiores aut. Ut explicabo cupiditate officiis. Ipsa modi labore impedit sit placeat odit dolores qui. Velit quasi voluptatem nisi odio.\n \rDoloremque aperiam itaque illum in error inventore sit hic. Quia vel dolorum molestiae quos. Autem debitis est eum impedit voluptatibus ipsam eius voluptatem. Rerum iste ipsum nam vero ratione aliquam harum modi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.9479716780935519",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 2,
      name: "Rowan Eichmann",
      tel: "1-961-581-9817",
      address: "4169 Ernestine Radial",
      opening_hours: "08:00",
      description:
        "Laudantium qui placeat incidunt. Rerum consequatur nulla laudantium. Maxime dolorem rem nihil. Enim velit quasi iure totam dolorem iste beatae vitae. Suscipit consequatur nesciunt quia alias commodi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.12501075551988",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 3,
      name: "Jamaal Batz",
      tel: "1-189-941-4365 x2028",
      address: "446 Kerluke Squares",
      opening_hours: "08:00",
      description:
        "Reiciendis non dolores ut quo rem aut maiores. Dolore enim eum quia ratione ut porro culpa beatae dolorem. Qui quia laudantium illo unde quis. Ducimus reiciendis neque nulla exercitationem quaerat adipisci qui voluptates quasi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.62424942250317",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 4,
      name: "Dr. Chance Orn",
      tel: "1-764-782-6230 x65454",
      address: "0493 Sallie Springs",
      opening_hours: "08:00",
      description: "Optio enim facere et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.76171080682651",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 5,
      name: "Jamal Stracke",
      tel: "1-697-296-5399 x895",
      address: "1029 Muller Hills",
      opening_hours: "08:00",
      description: "Ut quod dignissimos corrupti voluptatem voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.915990204369717",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 6,
      name: "Frederic Dietrich",
      tel: "742.754.2980 x177",
      address: "45693 Blake Bypass",
      opening_hours: "08:00",
      description: "Aut at inventore id.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.13754476825567",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 7,
      name: "Nathaniel Hirthe",
      tel: "117.319.8987 x9602",
      address: "208 Lora Haven",
      opening_hours: "08:00",
      description: "necessitatibus et voluptatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.49267509879608",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 8,
      name: "Ms. Vada Ledner",
      tel: "1-709-888-9645 x51925",
      address: "371 Hackett Gardens",
      opening_hours: "08:00",
      description: "Beatae quaerat illo cum aperiam asperiores est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.066771964395823",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 9,
      name: "Brandi Waters",
      tel: "(631) 367-5305 x687",
      address: "912 Isadore Ford",
      opening_hours: "08:00",
      description:
        "Ipsa nemo velit aut dolor id corrupti voluptatem. Autem recusandae in molestiae voluptatem asperiores dolorem nisi assumenda. Ut ipsa officia praesentium reiciendis reiciendis non minima doloribus ut.\n \rTempore quia pariatur accusamus rerum. Sed molestias magni aperiam ad culpa dolor. Quia enim ea vel cum. Ducimus et eos illum doloremque amet eos. Consequatur est earum id modi doloremque aut.\n \rMaiores officiis non. Voluptatem et officia nihil. Accusamus sit illo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.38262122960224",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 10,
      name: "Sunny Nicolas",
      tel: "463.180.9288 x457",
      address: "262 Dickinson Station",
      opening_hours: "08:00",
      description: "quod",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.57503523929678",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
  ],
  comments: [
    {
      id: 8,
      text: "Voluptates dolores perspiciatis harum dolor vero labore.",
      UserId: 1,
      RestaurantId: 8,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 8,
        name: "Ms. Vada Ledner",
        tel: "1-709-888-9645 x51925",
        address: "371 Hackett Gardens",
        opening_hours: "08:00",
        description: "Beatae quaerat illo cum aperiam asperiores est.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=30.066771964395823",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 28,
      text: "Quod sunt quos quod doloremque ipsa nihil debitis.",
      UserId: 1,
      RestaurantId: 28,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 28,
        name: "Burley Lehner MD",
        tel: "781.699.0252",
        address: "51220 Borer River",
        opening_hours: "08:00",
        description:
          "Voluptas natus omnis sequi qui autem nemo aperiam ea. Eum ipsa autem velit. Excepturi maxime illum maxime. Sunt distinctio laborum voluptatibus nihil. Ipsa odio autem suscipit voluptatem nemo et ut quis.\n \rQuas cum at fugiat id sed rerum quis. Deserunt maxime molestiae quia consequuntur. Ea ea consequatur. Tenetur quam quo excepturi.\n \rEveniet est saepe nihil rerum aliquid illo minus repudiandae id. Facere sunt corrupti non quo aperiam. Quisquam cumque nisi et ipsa consectetur. Quibusdam hic suscipit deserunt corrupti sapiente provident. Ad animi repudiandae est in pariatur omnis dolorum.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=71.40838534374045",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 50,
      text: "Similique officiis ut id earum doloribus.",
      UserId: 1,
      RestaurantId: 50,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 50,
        name: "Henriette Kutch",
        tel: "641-182-5635 x784",
        address: "9574 Steuber Springs",
        opening_hours: "08:00",
        description:
          "Eaque omnis expedita non. Ullam ut et consequatur culpa magnam eum in totam. Quis sit explicabo eos sed quaerat cum eligendi aut inventore. Quo accusamus temporibus cum sit sit. Pariatur voluptas et esse dicta quaerat et molestiae ut rem.\n \rQuia error explicabo maiores expedita corrupti unde. Veniam rerum rerum fuga omnis quo iure ipsam impedit. Dolorem et ea non repellendus in ab. Cum modi nihil molestias eligendi consequatur expedita.\n \rPlaceat vel nostrum molestias soluta ut optio exercitationem et. Officia qui voluptates temporibus et aut voluptas nesciunt similique. Et consequuntur quasi aut. Vel consequatur consectetur rerum qui.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=16.179129340354727",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 75,
      text: "Nihil asperiores officiis et soluta eligendi.",
      UserId: 1,
      RestaurantId: 25,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 25,
        name: "Lilian Mosciski",
        tel: "1-284-094-9827 x06385",
        address: "9282 Swift Stravenue",
        opening_hours: "08:00",
        description: "velit ipsam quos",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=78.67020398502558",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 97,
      text: "Iusto reprehenderit recusandae provident iusto.",
      UserId: 1,
      RestaurantId: 47,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 47,
        name: "Lonny Bernhard",
        tel: "(766) 481-7382 x2808",
        address: "9929 Kiley Terrace",
        opening_hours: "08:00",
        description: "accusamus optio ut",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=99.06752313567053",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 123,
      text: "Dolor et voluptatem et dolore qui ut accusantium.",
      UserId: 1,
      RestaurantId: 23,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 23,
        name: "Jazmyne Heller",
        tel: "460-838-6521",
        address: "392 Belle Neck",
        opening_hours: "08:00",
        description:
          "Nihil blanditiis esse alias sit cum minima facilis aut occaecati. Sint et labore sint rerum aspernatur cumque sapiente dolorum libero. Enim temporibus sit amet voluptas et ea. Eum amet qui qui rerum at repudiandae voluptas. In pariatur eos id.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=46.6477007141564",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 7,
      text: "Voluptatibus voluptates voluptas blanditiis officiis.",
      UserId: 2,
      RestaurantId: 7,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.daIm2U.cnzxk180nYmyOuVqCh9cOVFp5QDyMWnWkb6OlyHlDzuCu",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 7,
        name: "Nathaniel Hirthe",
        tel: "117.319.8987 x9602",
        address: "208 Lora Haven",
        opening_hours: "08:00",
        description: "necessitatibus et voluptatibus",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=34.49267509879608",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 32,
      text: "Recusandae fugiat sit consequatur quod ipsa tenetur eum.",
      UserId: 2,
      RestaurantId: 32,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.daIm2U.cnzxk180nYmyOuVqCh9cOVFp5QDyMWnWkb6OlyHlDzuCu",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 32,
        name: "Estel Terry PhD",
        tel: "902-165-5739 x55047",
        address: "85830 Theodore Squares",
        opening_hours: "08:00",
        description:
          "Exercitationem veritatis dolor voluptas numquam fugiat perferendis esse. Aspernatur dicta quae possimus. Qui aperiam repudiandae ipsa accusamus consequuntur et. Vitae facilis error adipisci qui recusandae reprehenderit fuga. Quia amet nihil quia alias.\n \rDolorem autem repellendus tenetur architecto ipsum. Perferendis sunt sint dolorum voluptatem ullam hic ducimus. Et ad vel sequi iste. Consequuntur voluptas vitae. Repudiandae corporis veritatis saepe qui sint occaecati tenetur.\n \rMagni quidem molestias quia consectetur. At laborum deserunt minus sunt et voluptatem. Ducimus eum eius omnis ratione ut nihil iste ut. Fugiat occaecati nemo. Ut iure eaque sunt.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=6.353189119254687",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 63,
      text: "Eius cumque eum sit nihil est occaecati veritatis.",
      UserId: 2,
      RestaurantId: 13,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.daIm2U.cnzxk180nYmyOuVqCh9cOVFp5QDyMWnWkb6OlyHlDzuCu",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 13,
        name: "Chaim Bernier",
        tel: "1-006-572-4796 x666",
        address: "248 Megane Row",
        opening_hours: "08:00",
        description:
          "Ut facere quis qui repellendus velit rerum cum dolore non.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=44.26395047078808",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 84,
      text: "In ipsum veritatis numquam molestiae corrupti aut a.",
      UserId: 2,
      RestaurantId: 34,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$.daIm2U.cnzxk180nYmyOuVqCh9cOVFp5QDyMWnWkb6OlyHlDzuCu",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      Restaurant: {
        id: 34,
        name: "Felix Cole",
        tel: "387-940-4159 x124",
        address: "30118 Auer Manors",
        opening_hours: "08:00",
        description: "ad",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=52.06792994220779",
        viewCounts: 0,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        CategoryId: 5,
      },
    },
  ],
};

export default {
  name: 'RestaurantsFeeds', // 取跟檔名一樣的名字
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      // fetch API
      // 洗髒資料
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter( comment => comment.text && comment.Restaurant.name )
    }
  }
};
</script>
