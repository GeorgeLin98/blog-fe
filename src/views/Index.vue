<template>
  <div v-title data-title="GeorgeBlog">
    <el-container>
      <el-main class="me-articles">
        <ArticleItem
          v-for="article in articles"
          :key="article.id"
          v-bind="article"
        >
        </ArticleItem>
      </el-main>

      <el-aside>
        侧边栏,右侧
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem.vue";
export default {
  name: "Index",
  data() {
    return {
      articles: [
        {
        id: "1",
          weight: 1,
          title: "标题1",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          createDate: "3333"
        },
        {
          id: "2",
          weight: 1,
          title: "标题2",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          createDate: "111"
        },
        {
          id: "3",
          weight: 1,
          title: "标题3",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          createDate: "222"
        }
      ]
    };
  },
  methods: {},
  components: {
    ArticleItem
  }
};
</script>

<style>
.el-container {
  width: 960px;
}

.el-aside {
  margin-left: 20px;
  width: 260px;
}

.el-main {
  padding: 0px;
  line-height: 16px;
}

.el-card {
  border-radius: 0;
}

.el-card:not(:first-child) {
  margin-top: 20px;
}
</style>
