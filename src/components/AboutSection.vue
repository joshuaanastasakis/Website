<script lang="ts">
import Divider from './Divider.vue'

interface Category {
  type: string,
  items: Item[]
}

interface Item {
  name: string,
  exp: 1 | 2 | 3 | 4
}

export default {
  data() {
    return {
      headers: ["Category", "Some", "Much", "Tons", "Master"],
      items: [
        {
          type: "Frontend",
          items_count: 4,
          items: [
            {
              name: "Javascript",
              exp: 3,
            },
            {
              name: "HTML/CSS",
              exp: 3,
            },
            {
              name: "ReactJS",
              exp: 1,
            },
            {
              name: "VueJS",
              exp: 1,
            },
          ]
        }
      ]
    }
  }, 
  mounted() {
    console.log("mounted")
  }
}
</script>

<template>
  <div id="about" class="section">
    <h2>About</h2>
    <Divider />
    <div class="text-container">
      <p class="text-justify">I have 10+ years of university, workplace and self-taught experience that has allowed my passion for programming to flurish.</p>
    </div>
    <h3>Experience</h3>
    <div class="graph-container">
      <table>
        <tr>
          <th v-for="header in headers">{{ header }}</th>
        </tr>
        <tr class="frontend">
          <td rowspan="4">Frontend</td>
          <!-- <td>Javascript</td> -->
          <td colspan="3">Javascript</td>
          <td rowspan="9" class="master">Coming Soon</td>
        </tr>
        <tr class="frontend">
          <!-- <td>HTML/CSS</td> -->
          <td colspan="3" class="tons">HTML/CSS</td>
        </tr>
        <tr class="frontend">
          <!-- <td>ReactJS</td> -->
          <td colspan="2">ReactJS</td>
        </tr>
        <tr class="frontend last">
          <!-- <td>VueJS</td> -->
          <td colspan="1">VueJS</td>
        </tr>
        <tr class="backend">
          <td rowspan="2">Backend</td>
          <!-- <td>NodeJS</td> -->
          <td colspan="1">NodeJS</td>
        </tr>
        <tr class="backend last">
          <!-- <td>Django</td> -->
          <td colspan="1">Django</td>
        </tr>
        <tr class="database">
          <td rowspan="3">Database</td>
          <!-- <td>MySQL</td> -->
          <td colspan="3">MySQL</td>
        </tr>
        <tr class="database">
          <!-- <td>Firebase</td> -->
          <td colspan="2">Firebase</td>
        </tr>
        <tr class="database">
          <!-- <td>MongoDB</td> -->
          <td colspan="1">MongoDB</td>
        </tr>
        <!-- <tr v-for="(category, index) of items">
          <tr>
            <td v-if="index===0" rowspan="{category.items_count}">{{ category.type }}</td>
          </tr>
          <tr v-for="item of category.items">
            <td></td>
            <td>{{ item.name }}</td>
            <td>{{ item.exp===1 || item.exp }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.name }}</td>
          </tr>
          
        </tr> -->
      </table>
    </div>
    
  </div>
</template>

<style scoped>
</style>
