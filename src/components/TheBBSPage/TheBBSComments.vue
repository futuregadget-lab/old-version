<template>
  <table class="comments">
    <tbody>
      <tr>
        <td>
          <div v-for="(comment, index) in comments" :key="index">
            [{{ comments.length - index }}]
            <strong>{{ comment.subject }}</strong>
            <!-- eslint-disable-next-line -->
            　{{ $t('bbsPage.postedBy') }}<span class="name">{{ comment.name }}</span>　
            {{ comment.date }}
            <br><br>
            <div v-html="comment.comment"></div>
            <p v-if="index !== comments.length - 1">&nbsp;</p>
            <div v-if="comment.url">
              {{ comment.url }}
              <p>&nbsp;</p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TheBBSComments',
  data () {
    return {
      comments: [
        {
          subject: 'Matter of No. 7',
          name: 'Hououin Kyouma',
          date: '2010/7/13',
          comment: 'Materials cost of No. 7 alone is taking of lots of golds. It\'s being ' +
            'cheaper than now it\'s impossible. Special price of the now is already such discount.'
        }, {
          subject: 'Price',
          name: 'Phantasm Phangirl',
          date: '2010/7/13',
          comment: 'Can price of future gadgets No. 7 be made of a little cheapers?<br>' +
            'It way too expensive ｏｒｚ<br>' +
            '2000 yen is just right the pricing level.'
        }, {
          subject: 'The hell is wrong with this site?',
          name: 'Spunky',
          date: '2010/7/7',
          comment: 'This site is so lame. You\'ve got to be kidding me.<br>' +
            'I thought I went a time warp to the 90\'s for a second there.<br>' +
            'Did you seriously machine translate this crap?'
        }, {
          subject: 'lol',
          name: 'scampering bastard',
          date: '2010/6/29',
          comment: 'How chuunibyou a sight this is wwwww you funny guy Hououin-san!'
        }, {
          subject: 'Celebrity Introduction',
          name: 'Masa',
          date: '2010/6/21',
          comment: 'Looks I am liked by beauty of glasses super rich celebrity.<br>' +
            'I give the s*x to her as she asked for<br>' +
            'She say now she buying for me a new P*rsche<br>' +
            'Last month, I made an earning of more money than what core business of mine make, so I wish be pimp forever!<br>' +
            'She say friend of hers is wanting of man who make good the s*x like I make too!<br>' +
            'Sign up to score the points like me!!<br>',
          url: 'http://kusomiso.tekunikku.com/tugihashonben/'
        }, {
          subject: 'Future Gadgets',
          name: 'Hououin Kyouma',
          date: '2010/6/6',
          comment: 'Of course they for the sale. Come send fax or come directly at the lab. ' +
            'What you like? You having of any questions then we giving of details.'
        }, {
          subject: 'Future Gadgets',
          name: 'Just passing the bye',
          date: '2010/6/6',
          comment: 'Are future gadgets really for the sale? Maybe I am interested, hahah...'
        }, {
          subject: 'http://broge.deaddoo.net/pupupu/05789.html',
          name: 'Yuruyu',
          date: '2010/5/30',
          comment: 'Sorry I put link without get the permission<br>' +
            'Please make the report'
        }, {
          subject: 'College student girl a best!',
          name: 'Yujiro',
          date: '2010/5/19',
          comment: 'I maked a sexy time with sexy friend Mikitty!!<br>' +
            'She make a puff puffing with many big the boobies<br>' +
            'So moving is her shikkoshikko effort with thin finger!<br>' +
            'And plus to get money doing it I be awesome www',
          url: 'http://super.eroierokunai.net/fuhihihihi/'
        }, {
          subject: 'Commemorational proast♪',
          name: 'Mayushii☆',
          date: '2010/5/13',
          comment: 'Nice to meet you To~uuto~uru over♪ ' +
            'Is amazing to make a posting in English with automaton.'
        }, {
          subject: 'Which has set up the board',
          name: 'Hououin Kyouma',
          date: '2010/5/10',
          comment: 'English hompage of our future gadget laboratory was established finally. ' +
            'Being one chased after by the Organization, I\'d prefer the work behind a scene, but  ' +
            'I be moved by desire to leave behind a proof that "I be here". ' +
            'Yes, I want to be the found by someone... and being in English makes a widening of audience reach around. ' +
            'So in this board, I or the future gadget laboratory will make a collecting of any question whatever. ' +
            'We danube to make the answering of it. That is selection of "door over the fate - Steins gate". El Psy Kongroo.'
        }
      ]
    }
  }
}
</script>

<style scoped>
table.comments {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  width: 500px;
}

span.name {
  color: #00f;
}
</style>
