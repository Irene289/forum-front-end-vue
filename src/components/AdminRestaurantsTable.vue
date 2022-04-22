<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link 
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id }}" 
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link 
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}" 
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button 
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button" 
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  // ... 請貼上 API 資料
  // 暫用：GET http://localhost:3000/api/admin/restaurants
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
      viewCounts: 1,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-21T05:55:50.000Z",
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
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 12,
      name: "Sylvester Stark",
      tel: "(877) 663-4740",
      address: "1577 Nader Terrace",
      opening_hours: "08:00",
      description: "nam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.62545731660262",
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
      id: 13,
      name: "Chaim Bernier",
      tel: "1-006-572-4796 x666",
      address: "248 Megane Row",
      opening_hours: "08:00",
      description: "Ut facere quis qui repellendus velit rerum cum dolore non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.26395047078808",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 16,
      name: "Deion Sipes",
      tel: "227.540.9204 x34926",
      address: "15126 Reece Walks",
      opening_hours: "08:00",
      description: "Hic natus doloribus voluptas suscipit voluptates quisquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.4496934636292",
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 26,
      name: "Raven Schuppe DVM",
      tel: "284-383-5460",
      address: "6097 Grant Plains",
      opening_hours: "08:00",
      description: "Nam quo ab animi delectus rerum sit ex qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.701767861019377",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 29,
      name: "Lurline Dickens",
      tel: "1-711-854-7680 x0314",
      address: "178 Rippin Lane",
      opening_hours: "08:00",
      description: "deserunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.39642552830472",
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
      id: 30,
      name: "Mathias Ernser",
      tel: "1-327-684-3923",
      address: "29598 Feeney Spurs",
      opening_hours: "08:00",
      description: "Ut unde molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.52436996813314",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 36,
      name: "Chaim Sawayn",
      tel: "715.961.6097 x2268",
      address: "8840 Benny Lights",
      opening_hours: "08:00",
      description:
        "Nesciunt ipsum quia dicta ea. Sed distinctio sunt eum explicabo expedita sapiente. Qui provident nihil. Qui blanditiis qui quae aliquam aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.81547140319563",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 38,
      name: "Ciara Dooley",
      tel: "653-262-2891 x8318",
      address: "72412 Will Lane",
      opening_hours: "08:00",
      description:
        "Itaque neque at molestiae autem. Eum sed itaque necessitatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.591947455822336",
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 43,
      name: "Elliot Upton II",
      tel: "247-639-3380",
      address: "3362 Clare Bypass",
      opening_hours: "08:00",
      description: "est assumenda corporis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.153234490631549",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 45,
      name: "Aryanna Kautzer",
      tel: "1-660-914-5126 x5410",
      address: "20595 Carlos Tunnel",
      opening_hours: "08:00",
      description:
        "Iusto a saepe dolor repellat. Optio esse odio velit. Ipsa tempore magni error. Quos eligendi laborum reprehenderit et qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.39716817289931",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
      id: 48,
      name: "Emmitt Hickle",
      tel: "1-676-822-7544 x00137",
      address: "016 Johathan Street",
      opening_hours: "08:00",
      description: "Excepturi porro velit quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.32541440737077",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
    },
  ],
}

export default {
  data() {
    return {
      restaurants: [],
    }
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  },
};
</script>