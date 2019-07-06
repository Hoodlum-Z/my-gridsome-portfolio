<template>
  <Layout>

    <div class="jumbotron Hero">
      <div class="row">
          <div class="col-6 Main-Col">
      <h1 class="display-4">My <a href="https://gridsome.org">Gridsome</a> Portfolio</h1>
      <h6 class="lead">Gridsome enables you to build the coolest websites using the Jamstack.</h6>
      <hr class="my-4">
        <ul class="List">
          <li>It's the latest technology created by Netlify co-founder Matt Billman.</li> 
          <li>JavaScript | APIS | Markup</li>
          <li>Devs love it. We hope you will too.</li>
      </ul>
            <a class="Button btn btn-primary btn-lg" href="#works" role="button">Portfolio Works</a>
    </div>
        </div>
    </div>

    <div class="PortfolioWorks container" id="works">
            <h2 class="Portfolio-Title">Some of my Latest Projects</h2>

        <div class="row">
         
          <div class="Work col-6" v-for="work in $page.allWork.edges" :key="work.node.id">

            <g-link :to="work.node.path">   
              <div class="Work-Card">
                <g-image class="Work-Image" v-if="work.node.image != null" :src="work.node.image"></g-image>
                <h2 class="Work-Title">{{work.node.title}}</h2>
                <p>{{work.node.description}}</p>
              </div>
          </g-link> 
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
 query{
  allWork{
    totalCount
    
    edges{
      node{
        id
        title
        description
        path
        image (width: 470, quality: 90, blur: 10)
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'My Gridsome Portfolio'
  }
}
</script>

<style>

.Hero {
  padding: 8rem;
  text-align: center;
}

.Main-Col {
  margin: 0 auto;
  align-items: center;
}

.List {
  text-align: left;
  margin: auto;
  line-height: 2;
}

.Button {
  margin-top: 4rem;
}

h1 {
  padding: 2rem 0;
}

.Portfolio-Title {
  text-align: center;
  padding: 2rem 0;
}

p {
  text-align: left;
  line-height: 2;
}

.Work {
  padding: 2rem 2rem;
}

.Work-Card {
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  border-radius: 1rem;
  padding: 1rem;
}

.Work-Title {
  padding: 1rem 0;
}

.Work-Image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.home-links a {
  margin-right: 1rem;
}

</style>