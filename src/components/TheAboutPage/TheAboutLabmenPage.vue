<template>
  <div class="labmen-page">
    <p>The True LaboratoryMembers</p>
    <p class="title"><strong>True name's of those chosen</strong></p>
    <p>~I are, we be, RABOMEN~</p>
    <p>&nbsp;</p>
    <div v-for="labmen in laboratoryMembers" :key="labmen.number">
      <p class="labmen-title" v-bind:class="{ hidden: labmen.hidden }">RABOMEN No.{{ labmen.number }} {{ labmen.name }}</p>
      <p v-html="replaceBreakLine(labmen.description)" v-bind:class="{ hidden: labmen.hidden }"></p>
    </div>
    <p>&nbsp;</p>
    <p><router-link to="/about">back</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'TheAboutLabmenPage',
  data () {
    return {
      laboratoryMembers: [
        {
          number: '001',
          name: 'Hououin Kyouma',
          description: 'And the founder of the Future Gadget Laboratory, mad scientist of madness.\n' +
            'Devotion of research to bring world chaos and avoiding of attack by "Organization"!'
        }, {
          number: '002',
          name: 'Mayushii☆',
          description: 'Liking of bananas and juicy chickens number one, chief of lab\'s "making costumes (for womens only)" division.\n' +
            'Makes an eating of somethings many times. Special ability "stardust handshake" owner.'
        }, {
          number: '003',
          name: 'Daru',
          description: 'It is SUPAHAKA that specializes in infiltration to any information network.\n' +
            'Precious power of Hououin Kyouma\'s favorite right hand. However a perv.'
        }, {
          number: '004',
          name: '',
          description: 'Hope to finally getting of cute girl...',
          hidden: true
        }, {
          number: '65535',
          name: '',
          description: 'Just put many here',
          hidden: true
        }
      ]
    }
  },
  methods: {
    replaceBreakLine (description) {
      return description.replace('\n', '<br>')
    }
  }
}
</script>

<style scoped>
.labmen-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}

p.labmen-title {
  color: #ff0000;
}

.hidden {
  color: #1a073e !important;
}
</style>
