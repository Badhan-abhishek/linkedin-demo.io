Vue.component("navbar", {
  props: {
    current_user: {
      type: Object,
    },
  },
  template: `
  <div class="wrapper">
    <div class="nav-main">
        <nav class="nav-tag">
            <div class="icon">
            <i class="fab fa-linkedin fa-2x"></i>
            <div class="vr"></div>
            <button class="text-disc"> Discover <i class="arrow down"></i></button>
            </div>
            <div class="search-div">
                <input class="input" type="text" placeholder="Search linkedin" ></input>
            </div>
            <div class="nav-icons"> 
            <button><i class="far fa-comment-alt fa-2x"></i></button>
            <button><i class="far fa-flag fa-2x"></i></button>
            <button><img class="user-icon" v-bind:src="image" /></button>
            </div>
            </nav>
    </div>
    <div class="tabs">
        <button class="tab-button active-tab">Posts</button>
        <button class="tab-button">Articles</button>
        <button class="tab-button">Companies</button>
        <button class="tab-button">Jobs</button>        
    </div>
    </div>`,
  data() {
    return {
      name: "LinkedIn",
    };
  },
  computed: {
    image() {
      return this.current_user.profile_picture;
    },
  },
});

Vue.component("content-main", {
  props: {
    current_user: {
      type: Object,
    },
  },
  template: `
  <div class="wrapper-content">
  <div class="user-section">
    <div class="user-img">
      <img :src="image" class="image-user-left" />
      <span class="user-name"> {{this.current_user.name}} </span>
      <span class="company-name"> {{this.current_user.company }} </span>
    </div>
    <div class="status">
      <div class="connections">
        <span class="nums">{{this.current_user.connections}}</span>
        <span class="text">Connections</span>
      </div>
      <div class="views">
        <span class="nums">{{this.current_user.views}}</span>
        <span class="text">views</span>
      </div>
    </div>
    <div class="links">
      <div class="links-linkedin">
        <i class="fab fa-linkedin-in"></i>
        <a :href="linkedinLink">{{linkedinName}}</a>
      </div>
      <div class="links-github">
        <i class="fab fa-github-alt"></i>{{this.current_user.github}}
      </div>
      <div class="links-twitter">
        <i class="fab fa-facebook-f"></i>{{this.current_user.twitter}}
      </div>
    </div>
  </div>
  <div class="center-section">
    <div class="center-section-pseudo">
      <div class="create-post">
        <div class="create-options">
          <button class="share-update btn-active">
            <i class="fas fa-pen"></i> Share an update
          </button>
          <button class="uplaod-photo">
            <i class="fas fa-image fa-1x"></i> Upload a photo
          </button>
          <button class="write-article">
            <i class="fas fa-book-open"></i> Write an article
          </button>
        </div>
        <div class="post-input">
          <input type="text" placeholder="Write something..." />
        </div>
      </div>
      <div class="post-show">
        <div v-for="(post, index) in posts" :key="post.id">
          <div class="post-card">
            <div class="card-head">
              <div class="user-details">
                <img :src="post.avatar" />
                <div class="nameandc">
                  <span class="post-name">{{post.name}}</span>
                  <span class="post-company">{{post.company}}</span>
                </div>
              </div>
              <div class="post-time">
                {{post.time}}
              </div>
            </div>
            <div class="card-body">
              <div class="card-text">
                {{post.text}}
              </div>
              <div class="card-img">
                <div v-if="post.postImg.length !== 0">
                  <img :src="post.postImg" />
                </div>
                <div v-else></div>
              </div>
            </div>
            <div class="card-footer">
              <div class="reaction-panel">
                <button v-on:click="inc(index)">
                  <i class="far fa-heart"></i> {{post.likes}}
                </button>
                <button class="comments-count">
                  <i class="far fa-comment"></i> {{post.comments}}
                </button>
                <button class="share-btn">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra-pseudo"></div>
    </div>
  </div>
  <div class="right-section">
    <div class="right-heading">
       <button> Keep in touch </button>
    </div>
    <div v-for="user in users" >
        <div class="user-details">
            <img :src="user.avatar" />
            <div class="nameandc">
                  <span class="post-name">{{user.name}}</span>
                  <span class="post-company">{{user.company}}</span>
            </div>
        </div>
    </div>
  </div>
</div>


`,
  data() {
    return {
      name: "LinkedIn",
      posts: [
        {
          id: 234,
          name: "Monica Geller",
          avatar:
            "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          company: "Facebook Inc",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem corrupti sunt possimus, laborum adipisci modi amet ea rerum autem?",
          postImg: "",
          time: "Just Now",
          likes: 0,
          comments: 0,
        },

        {
          id: 233,
          name: "Abhishek",
          avatar:
            "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          company: "Alibaba LLC",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem corrupti sunt possimus, laborum adipisci modi amet ea rerum autem?",
          postImg:
            "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          time: "2 Hours ago",
          likes: 0,
          comments: 0,
        },
      ],
      users: [
        {
          id: 234,
          name: "Monica Geller",
          avatar:
            "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          company: "Facebook Inc",
        },
        {
          id: 233,
          name: "Abhishek",
          avatar:
            "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          company: "Alibaba LLC",
        },
      ],
    };
  },
  methods: {
    inc: function (index) {
      if (this.posts[index].likes === 1) {
        this.posts[index].likes -= 1;
      } else {
        this.posts[index].likes += 1;
      }
    },
  },
  computed: {
    image() {
      return this.current_user.profile_picture;
    },
    linkedinLink() {
      return this.current_user.linkedin;
    },
    linkedinName() {
      var ending = "...";
      var str = this.current_user.linkedin;
      if (str.length > 25) {
        return str.substring(0, 25 - ending.length) + ending;
      } else {
        return str;
      }
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    current_user: {
      name: "Abhishek",
      profile_picture:
        "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      company: "Yahoo inc",
      connections: 346,
      views: 50,
      linkedin: "https://www.linkedin.com/in/abhishek-4b3b49198/",
      github: "badhan-abhishek",
      twitter: "dummy-user",
    },
  },
});
