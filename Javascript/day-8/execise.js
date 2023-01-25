let data =[
    {
      "id": 323,
      "username": "rinood30",
      "profile": {
        "full_name": "Shabrina Fauzan",
        "birthday": "1988-10-30",
        "phones": [
          "08133473821",
          "082539163912"
        ]
      },
      "articles": [
        {
          "id": 3,
          "title": "Tips Berbagi Makanan",
          "published_at": "2019-01-03T16:00:00"
        },
        {
          "id": 7,
          "title": "Cara Membakar Ikan",
          "published_at": "2019-01-07T14:00:00"
        }
      ]
    },
    {
      "id": 201,
      "username": "norisa",
      "profile": {
        "full_name": "Noor Annisa",
        "birthday": "1986-08-14",
        "phones": []
      },
      "articles": [
        {
          "id": 82,
          "title": "Cara Membuat Kue Kering",
          "published_at": "2019-10-08T11:00:00"
        },
        {
          "id": 91,
          "title": "Cara Membuat Brownies",
          "published_at": "2019-11-11T13:00:00"
        },
        {
          "id": 31,
          "title": "Cara Membuat Brownies",
          "published_at": "2019-11-11T13:00:00"
        }
      ]
    },
    {
      "id": 42,
      "username": "karina",
      "profile": {
        "full_name": "Karina Triandini",
        "birthday": "1986-04-14",
        "phones": [
          "06133929341"
        ]
      },
      "articles": []
    },
    {
      "id": 201,
      "username": "icha",
      "profile": {
        "full_name": "Annisa Rachmawaty",
        "birthday": "1987-12-30",
        "phones": []
      },
      "articles": [
        {
          "id": 39,
          "title": "Tips Berbelanja Bulan Tua",
          "published_at": "2019-04-06T07:00:00"
        },
        {
          "id": 43,
          "title": "Cara Memilih Permainan di Steam",
          "published_at": "2019-06-11T05:00:00"
        },
        {
          "id": 58,
          "title": "Cara Membuat Brownies",
          "published_at": "2019-09-12T04:00:00"
        }
      ]
    }
  ];

 

  //cari yang tidak punya no hp
  const usersWithoutPhone = data.filter(user => user.profile.phones.length === 0);
  console.log(usersWithoutPhone);

  //cari user yang punya artikel
  const usersWithArticles = data.filter(user => user.articles.length > 0);
  console.log(usersWithArticles);
  //cari user yang bernama anis
  const usersWithAnnisName = data.filter(user => user.profile.full_name.toLowerCase().includes("annis"));
  console.log(usersWithAnnisName);
  //cari artikel yang keluaran 2020
  const usersWithArticlesOn2020 = data.filter(user => {
    return user.articles.some(article => {
      const publishedAt = new Date(article.published_at);
      return publishedAt.getFullYear() === 2020;
    });
  });
  console.log(usersWithArticlesOn2020);
  //cari user yang kelahiran 1986
  const usersBornOn1986 = data.filter(user => {
    const birthday = new Date(user.profile.birthday);
    return birthday.getFullYear() === 1986;
  });
  console.log(usersBornOn1986);
  //cari kata yang mengandung "tips" di article
  const articlesWithTips = data.reduce((articles, user) => {
    return articles.concat(user.articles.filter(article => article.title.toLowerCase().includes("tips")));
  }, []);
  console.log(articlesWithTips);
// temukan artikel yang berada pada tahun 2019
const articlesPublishedBeforeAugust2019 = data.reduce((articles, user) => {
  return articles.concat(user.articles.filter(article => {
    const publishedAt = new Date(article.published_at);
    return publishedAt < new Date("2019-08-01T00:00:00");
  }));
}, []);
console.log(articlesPublishedBeforeAugust2019);


