<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
    isAdmin: true,
    image: null,
    createdAt: "2022-04-18T08:11:33.000Z",
    updatedAt: "2022-04-18T08:11:33.000Z",
    Comments: [
      {
        id: 2,
        text: "Accusantium eligendi quis saepe quia pariatur architecto consequuntur voluptatem sit.",
        UserId: 1,
        RestaurantId: 2,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 5,
        text: "Dolorum enim ipsa voluptatem enim sunt assumenda.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 8,
        text: "Voluptates dolores perspiciatis harum dolor vero labore.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 10,
        text: "Sed numquam dolorum rerum laborum.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 13,
        text: "Nihil temporibus animi et rerum.",
        UserId: 1,
        RestaurantId: 13,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 18,
        text: "Ut quo aut fugiat molestias expedita culpa omnis possimus consequatur.",
        UserId: 1,
        RestaurantId: 18,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 18,
          name: "Gina Leuschke",
          tel: "713.343.6632",
          address: "1997 Ryan Flats",
          opening_hours: "08:00",
          description: "voluptatem",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=66.03625972186452",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 19,
        text: "Consequatur consequuntur non ducimus.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 19,
          name: "Frederik Kuhlman",
          tel: "(532) 810-0770 x74281",
          address: "266 Madison Gateway",
          opening_hours: "08:00",
          description: "Doloremque sed omnis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=22.326062031428286",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 22,
        text: "Cum et rerum voluptatem.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 22,
          name: "Ernie Hauck",
          tel: "1-110-773-6792 x19317",
          address: "38620 Bechtelar Expressway",
          opening_hours: "08:00",
          description: "neque",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=92.3299138568338",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 23,
        text: "Ea atque eaque perferendis ipsam vel sint ullam eaque.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 24,
        text: "Facilis quod est dolorum aliquid laborum sed.",
        UserId: 1,
        RestaurantId: 24,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 24,
          name: "Frank Johns",
          tel: "1-146-201-6183 x91334",
          address: "6633 Zelma Hollow",
          opening_hours: "08:00",
          description:
            "Deserunt maxime sunt adipisci. Ratione voluptatum est officiis molestias nesciunt voluptatem. Ipsum eum ut reprehenderit distinctio voluptas id. Quod qui quia omnis ipsa voluptatem excepturi. Mollitia magni dicta provident corporis.\n \rDistinctio eos odio vel nesciunt dolores alias. Tempore nulla dolor optio dolor impedit. Aut est dolore molestiae at sunt quo possimus. Inventore voluptas aliquam delectus.\n \rIn porro debitis temporibus deserunt velit repellat. Qui dolorum consequatur nulla ad porro cumque sed possimus natus. Aut excepturi et nihil veritatis facere sequi tempora. Suscipit consequatur sed non odio itaque dolore neque modi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=49.69846911921443",
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
        id: 34,
        text: "Quaerat eos autem omnis et vero labore at soluta est.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
      {
        id: 35,
        text: "Vel molestiae illo enim.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 35,
          name: "Evalyn Labadie",
          tel: "(667) 504-9077",
          address: "116 Christop View",
          opening_hours: "08:00",
          description: "quia veniam aliquid",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.94129691889782",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 39,
        text: "Id fugiat consequatur voluptas.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 39,
          name: "Ms. Marge Hodkiewicz",
          tel: "1-726-466-9560",
          address: "34474 Jenkins Divide",
          opening_hours: "08:00",
          description:
            "Maxime voluptas expedita.\nNihil debitis maiores necessitatibus quis ad.\nDolores non quae tenetur id.\nQuae aut nam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=41.271829355686585",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 40,
        text: "Deserunt nihil eveniet delectus maxime esse.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 40,
          name: "Anthony McClure",
          tel: "837-082-8434 x49814",
          address: "63471 Blick Turnpike",
          opening_hours: "08:00",
          description:
            "Voluptatem temporibus dolor non. Reprehenderit quis eveniet eum laboriosam. Saepe qui et deleniti libero sit voluptates harum. Dolorum temporibus sit nisi sapiente quisquam iusto est similique alias. Eius enim et dolores iure. Aut ad repellat velit.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=13.649826264402565",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 41,
        text: "Perspiciatis aut qui.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 41,
          name: "Mrs. Gust Braun",
          tel: "075-613-1550 x98023",
          address: "71914 Richard Lodge",
          opening_hours: "08:00",
          description:
            "Accusamus animi magnam. Omnis maxime assumenda sint. Laborum ad vero ut sit doloremque et. Pariatur dolor iure quos exercitationem perferendis. Molestiae maiores sed qui autem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=11.039920978260142",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 42,
        text: "Suscipit rerum possimus ea temporibus.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 42,
          name: "Jennifer Reilly",
          tel: "084-224-3461",
          address: "54516 Jon Centers",
          opening_hours: "08:00",
          description:
            "Vel quia et totam commodi animi. Nulla accusamus eum repellendus molestiae quasi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=41.76889333645786",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 47,
        text: "Aspernatur et eveniet quod aut non sed ratione debitis nam.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 50,
        text: "Similique officiis ut id earum doloribus.",
        UserId: 1,
        RestaurantId: 50,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 51,
        text: "Omnis repellat voluptas.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 1,
          name: "Tremaine Simonis",
          tel: "1-513-898-9528 x7804",
          address: "04053 Waelchi View",
          opening_hours: "08:00",
          description:
            "Qui quasi dolores dolorem odio et possimus voluptatem et. Soluta facere tempora porro autem tempora quasi. Deleniti debitis sint corporis laudantium necessitatibus numquam deserunt et quidem. Quis ut vel alias ipsa ipsam. Quis molestiae natus sequi commodi et quasi porro id. Et maxime consequuntur fugit vel dolor.\n \rBlanditiis sint cumque ullam dolor nesciunt maiores aut. Ut explicabo cupiditate officiis. Ipsa modi labore impedit sit placeat odit dolores qui. Velit quasi voluptatem nisi odio.\n \rDoloremque aperiam itaque illum in error inventore sit hic. Quia vel dolorum molestiae quos. Autem debitis est eum impedit voluptatibus ipsam eius voluptatem. Rerum iste ipsum nam vero ratione aliquam harum modi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=1.9479716780935519",
          viewCounts: 1,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-21T05:55:50.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 53,
        text: "Eos assumenda voluptatem provident nulla voluptatem sit eos et ipsum.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 58,
        text: "Voluptas itaque ea architecto aliquam sed impedit.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 65,
        text: "Alias est quos architecto dolorem.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 15,
          name: "Yasmin Zieme",
          tel: "(590) 707-8589",
          address: "56643 Edmond Views",
          opening_hours: "08:00",
          description: "Placeat inventore et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=93.87041306938231",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 66,
        text: "Voluptatem in at qui.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 16,
          name: "Deion Sipes",
          tel: "227.540.9204 x34926",
          address: "15126 Reece Walks",
          opening_hours: "08:00",
          description:
            "Hic natus doloribus voluptas suscipit voluptates quisquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=77.4496934636292",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 68,
        text: "Exercitationem vero laborum soluta.",
        UserId: 1,
        RestaurantId: 18,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 18,
          name: "Gina Leuschke",
          tel: "713.343.6632",
          address: "1997 Ryan Flats",
          opening_hours: "08:00",
          description: "voluptatem",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=66.03625972186452",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 73,
        text: "Quia et beatae occaecati sapiente rerum reiciendis.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 75,
        text: "Nihil asperiores officiis et soluta eligendi.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 77,
        text: "Quaerat ratione nobis consequatur ut quis id et est reiciendis.",
        UserId: 1,
        RestaurantId: 27,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 27,
          name: "Idella Wintheiser",
          tel: "760-544-8374 x8494",
          address: "9917 Alisa Road",
          opening_hours: "08:00",
          description:
            "Eos harum dolorum fugiat temporibus. Quas ut repellat porro reprehenderit exercitationem fugit incidunt saepe ut. Aliquid est architecto odit eveniet. Eligendi esse consequuntur. Nam eos neque maxime nesciunt qui omnis qui. Qui eaque dolorem consectetur.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=67.95771161969246",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 81,
        text: "Totam pariatur provident fugiat id totam amet.",
        UserId: 1,
        RestaurantId: 31,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 31,
          name: "Kaley Heathcote",
          tel: "1-093-606-4731 x723",
          address: "29430 Hintz Meadows",
          opening_hours: "08:00",
          description:
            "Laboriosam tempore facere quidem veritatis.\nProvident eligendi sapiente perferendis porro et iure voluptatibus.\nExercitationem perspiciatis rerum dolores in nesciunt tempore numquam.\nItaque inventore dolorem.\nNon dolorem quasi sunt aspernatur iusto.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=98.15608074272495",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 87,
        text: "Inventore fugit voluptate nemo consequatur aliquam sed ab.",
        UserId: 1,
        RestaurantId: 37,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 37,
          name: "Aileen Witting",
          tel: "702.636.2141",
          address: "684 Hailey Key",
          opening_hours: "08:00",
          description:
            "Dignissimos consequatur ipsum maxime consequatur repudiandae voluptatem quam enim. Quis rerum fuga assumenda nobis dolores. Modi aperiam quisquam. Et magni corrupti est et molestiae deleniti voluptas culpa sit. Reiciendis beatae numquam tenetur ullam vitae fugit aut nostrum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=64.18191298000497",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 91,
        text: "Rem distinctio enim in consequatur similique inventore illum rerum a.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 41,
          name: "Mrs. Gust Braun",
          tel: "075-613-1550 x98023",
          address: "71914 Richard Lodge",
          opening_hours: "08:00",
          description:
            "Accusamus animi magnam. Omnis maxime assumenda sint. Laborum ad vero ut sit doloremque et. Pariatur dolor iure quos exercitationem perferendis. Molestiae maiores sed qui autem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=11.039920978260142",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 92,
        text: "Maiores rem fugit cupiditate ipsam necessitatibus placeat fugit.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 42,
          name: "Jennifer Reilly",
          tel: "084-224-3461",
          address: "54516 Jon Centers",
          opening_hours: "08:00",
          description:
            "Vel quia et totam commodi animi. Nulla accusamus eum repellendus molestiae quasi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=41.76889333645786",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 94,
        text: "Animi id veniam omnis nostrum quaerat.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 44,
          name: "Emanuel Ferry DDS",
          tel: "(835) 205-4133",
          address: "73752 Herminia River",
          opening_hours: "08:00",
          description:
            "Sit impedit labore. Voluptatem quas asperiores vitae quas maxime vel et et sit. Corrupti veritatis omnis porro in soluta id sequi. Ut rerum rerum facilis rerum sit nam et saepe facilis. Nisi sint et sint unde ipsa.\n \rCulpa officia accusantium dolor reiciendis quidem sed ea beatae in. Ut et quidem numquam et non. Fuga incidunt laudantium dolor quia.\n \rEt corporis sint earum facere vero. Aut illum eveniet consequatur aut voluptatibus cumque doloribus. Et eum sint non et vel assumenda. Voluptatem laboriosam aliquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=43.485999584282034",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 96,
        text: "Dolorum omnis rerum delectus.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 46,
          name: "Alejandrin Mosciski",
          tel: "340.801.4507 x7607",
          address: "269 Lamar Extension",
          opening_hours: "08:00",
          description:
            "Ut a illum aliquam mollitia ipsa nobis ut repellendus quo.\nVoluptatem voluptatibus aut architecto error in numquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=72.36450088514148",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 97,
        text: "Iusto reprehenderit recusandae provident iusto.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 99,
        text: "Id modi et sed quia voluptatibus qui.",
        UserId: 1,
        RestaurantId: 49,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 49,
          name: "Percival Trantow",
          tel: "(926) 870-4612 x039",
          address: "9026 Theo Island",
          opening_hours: "08:00",
          description:
            "Molestiae veritatis ipsum et voluptatem.\nVel sit veniam aperiam impedit dolores qui.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=22.773925921418158",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 106,
        text: "Est laudantium minima eum rerum tempora.",
        UserId: 1,
        RestaurantId: 6,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 111,
        text: "Rem libero adipisci enim excepturi quod fugit dolores.",
        UserId: 1,
        RestaurantId: 11,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 11,
          name: "Kenneth Predovic",
          tel: "911-329-3426",
          address: "03253 Legros Court",
          opening_hours: "08:00",
          description:
            "Nobis in accusamus. Id quos tempora in vel. Debitis qui inventore et aperiam consequuntur. Repellat iure autem eum neque velit vero sed eum. Nobis voluptatem porro. Delectus nihil sit nobis doloribus perspiciatis amet ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=16.09286522482325",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 114,
        text: "Aut itaque est sed tempora.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 14,
          name: "Cassandra Turner",
          tel: "1-213-225-7291",
          address: "432 Laurine Gateway",
          opening_hours: "08:00",
          description:
            "Excepturi quasi adipisci deserunt debitis est odit ea dolore. Quae reprehenderit voluptatibus dolorum praesentium libero sequi cupiditate rerum. Delectus et nisi voluptas earum. Quia at modi vel.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=21.834889677780755",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 117,
        text: "Dolores libero voluptatem consequatur temporibus autem soluta mollitia.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 17,
          name: "Irwin Konopelski",
          tel: "(674) 354-7961",
          address: "1797 Olga Haven",
          opening_hours: "08:00",
          description: "recusandae distinctio qui",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=36.3057646125609",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 120,
        text: "Aut consequuntur tempore ut nisi.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 20,
          name: "Paxton Jenkins",
          tel: "1-574-961-2465 x41001",
          address: "1509 Lew Vista",
          opening_hours: "08:00",
          description: "Nihil soluta culpa dolor dicta eaque ea excepturi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=57.19255128966998",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 121,
        text: "Perferendis quasi vero molestiae ut et earum et sint.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 21,
          name: "Zachery Leannon",
          tel: "(645) 944-9727 x376",
          address: "224 Ebert Turnpike",
          opening_hours: "08:00",
          description:
            "Aut provident provident eveniet tempore repellendus ipsa deserunt.\nAperiam et ut sunt sed commodi repudiandae eos incidunt.\nProvident sint adipisci voluptate et saepe qui veniam consequatur.\nQui ea similique optio excepturi necessitatibus.\nPariatur voluptatem distinctio molestias doloribus non totam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=9.516051044418393",
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
        id: 124,
        text: "Beatae beatae nesciunt velit fugit sed voluptate modi nulla architecto.",
        UserId: 1,
        RestaurantId: 24,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 24,
          name: "Frank Johns",
          tel: "1-146-201-6183 x91334",
          address: "6633 Zelma Hollow",
          opening_hours: "08:00",
          description:
            "Deserunt maxime sunt adipisci. Ratione voluptatum est officiis molestias nesciunt voluptatem. Ipsum eum ut reprehenderit distinctio voluptas id. Quod qui quia omnis ipsa voluptatem excepturi. Mollitia magni dicta provident corporis.\n \rDistinctio eos odio vel nesciunt dolores alias. Tempore nulla dolor optio dolor impedit. Aut est dolore molestiae at sunt quo possimus. Inventore voluptas aliquam delectus.\n \rIn porro debitis temporibus deserunt velit repellat. Qui dolorum consequatur nulla ad porro cumque sed possimus natus. Aut excepturi et nihil veritatis facere sequi tempora. Suscipit consequatur sed non odio itaque dolore neque modi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=49.69846911921443",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 125,
        text: "Eaque quibusdam qui eveniet.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
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
        id: 127,
        text: "Corporis velit necessitatibus officiis similique.",
        UserId: 1,
        RestaurantId: 27,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 27,
          name: "Idella Wintheiser",
          tel: "760-544-8374 x8494",
          address: "9917 Alisa Road",
          opening_hours: "08:00",
          description:
            "Eos harum dolorum fugiat temporibus. Quas ut repellat porro reprehenderit exercitationem fugit incidunt saepe ut. Aliquid est architecto odit eveniet. Eligendi esse consequuntur. Nam eos neque maxime nesciunt qui omnis qui. Qui eaque dolorem consectetur.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=67.95771161969246",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 131,
        text: "Ut ipsum labore quae magnam.",
        UserId: 1,
        RestaurantId: 31,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 31,
          name: "Kaley Heathcote",
          tel: "1-093-606-4731 x723",
          address: "29430 Hintz Meadows",
          opening_hours: "08:00",
          description:
            "Laboriosam tempore facere quidem veritatis.\nProvident eligendi sapiente perferendis porro et iure voluptatibus.\nExercitationem perspiciatis rerum dolores in nesciunt tempore numquam.\nItaque inventore dolorem.\nNon dolorem quasi sunt aspernatur iusto.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=98.15608074272495",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 133,
        text: "Maiores sed aut similique est doloremque sit non doloribus.",
        UserId: 1,
        RestaurantId: 33,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        Restaurant: {
          id: 33,
          name: "Clara Zboncak",
          tel: "441-282-5053 x3190",
          address: "11694 Damian Spur",
          opening_hours: "08:00",
          description:
            "Harum est natus ad tempore id minus pariatur repudiandae. Earum sunt nihil recusandae. Ipsa sit quas eum asperiores sed eligendi dolores quas sint. Occaecati consequatur doloribus minima voluptas nobis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=8.032862164438148",
          viewCounts: 0,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
          CategoryId: 1,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  data() {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log("fetchUser", userId);
      this.user = dummyData.profile;
    },
    handleFileChange (e) {
      const { files } = e.target
      // console.log(files)
      if ( files.length === 0 ) {
        this.user.image = ''
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.user.image = imgURL
      }
    },
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      console.log(formData)

      for (let [name, value] of formData) {
        console.log(name + ': ' + value)
      }
    }
  },
};
</script>
