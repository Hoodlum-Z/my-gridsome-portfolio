<template>
    <Layout>
       <div class="jumbotron">
            <h1>{{$page.work.title}}</h1>
            <h6 clss="display-6">{{$page.work.description}}</h6>
       </div>

        <div v-if="$page.work.image !== null">
            <g-image :src="$page.work.image"></g-image>
        </div>

       <div class="container">
           <div class="row">
            <div class="col-md-8 offset-2" v-html="$page.work.content"></div>
           </div>
      </div>
    </Layout>
</template>

<page-query>
query Works ($path: String!) {
 work: work (path: $path) {
    title
    description
    image (width: 800, quality: 90, blur: 10)
    content
 }
}
</page-query>

<style>

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
}

</style>