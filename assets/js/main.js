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
        <img :src="image" class="image-user-left">
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
        <i class="fab fa-linkedin-in"></i> <a :href="linkedinLink">{{linkedinName}}</a>
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
        <div class="create-post">
            <div class="create-options">
            <button>
                Share an update
            </button>
            <button>
                Upload a photo
            </button>
            <button>
                Write an article
            </button>
            </div>
        </div>
      </div>
      <div class="right-section">
      c
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
        "https://image.shutterstock.com/image-vector/male-default-avatar-profile-icon-600w-1725062341.jpg",
      company: "Yahoo inc",
      connections: 346,
      views: 50,
      linkedin: "https://www.linkedin.com/in/abhishek-4b3b49198/",
      github: "badhan-abhishek",
      twitter: "dummy-user",
    },
  },
});
