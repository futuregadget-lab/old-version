<template>
  <div class="gadgets-page">
    <p>The Future gadget</p>
    <p class="title"><strong>Gadgets being of a future</strong></p>
    <p>~crystal of wisdom honed, it will be the fire of god in holy war~</p>
    <p class="left"><br></p>
    <p>The following is a number of our having been invented prestigious "the Future Gadget"</p>
    <p>
      We also is offer all by mail order, so make not a hesitate to do fax. If you scared of
      the regretting for products being the sold out... make a buying now.
    </p>
    <p>Mail order for the fax numbering: 0C-3A66-1704</p>
    <p>&nbsp;</p>
    <p></p>
    <div v-for="(gadget, index) in gadgets" :key="index">
      <table border="1">
        <tbody>
          <tr>
            <td>No. {{ gadgets.length - index }}</td>
            <td>{{ gadget.name }}</td>
            <td>{{ gadget.price }}</td>
          </tr>
          <tr>
            <td colspan="3" v-html="gadget.description"></td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheGadgetsPage',
  data () {
    return {
      gadgets: [
        {
          name: 'PhoneWave (provisional)',
          price: 'Price TBD',
          description: 'Microwave by combining with mobile phones has enabled remote operations. ' +
            'Warming has already been completed by time of getting home.<br>' +
            '*We is adjusting now. Not yet ready the sale'
        }, {
          name: 'Ghost in the Shell camouflage ball',
          price: 'Special price 80,000 yen',
          description: 'Big Things that you can experience the optical camouflage artificially. ' +
            'Made a makings of with 6-inch cathode-ray tube, a total of 12 units and fill the gap ' +
            'fitted with multiple ultra-compact C-MOS camera. Just, the camera are outward and ' +
            'perpendicular to the monitor of the sphere corresponding the back with that camera. ' +
            'As resulting, bind spot will disappear from this Thing, it\'s a full view from the ' +
            'other side even if hiding the shadow of Thing<br>' +
            '*Is so huge. Please order only if having enough space in the house. ' +
            'Please do not rolled then broken it.'
        }, {
          name: 'Psyllium saver',
          price: 'Special price 1,480 yen',
          description: 'Psyllium red chemical type. By installing the handle, it can also handle as sword. ' +
            'The revolutionary idea emit gore, pretending of sword fight realism it has become possible.<br>' +
            '*Please make no swinging in narrow place. There is possibility that the scattering of gore can annoying neighbors.'
        }, {
          name: 'Also by Goemon you\'ve connected the thing which is not boring',
          price: 'Special price 7,800 yen',
          description: 'Eco dryer that is electricity bill unneeded. By combined with the vacuum cleaner, ' +
            'the exhaust is being used for drier use. Mad but eco. Contradiction is conception of this anguish ' +
            'invention explosive birth here.<br>' +
            '*Drier can only use the hot air. You can not air volume control.'
        }, {
          name: 'Moaddo Snake',
          price: 'Special price 7,800 yen',
          description: 'Ultra-instant humidifier. The boiled in electric heating coil many, a large amount of water, ' +
            'it is ejected steam tremendous amount. No more needing to fear of dry season. Because it is resembling of ' +
            'claymore mine, is also useful for decoration the house.<br>' +
            '*Use for 10 square meters. This future gadget has become disposable.'
        }, {
          name: 'You mean is this oraora!?',
          price: 'Special price 9,240 yen',
          description: 'Judges lie detector depending on sweat of thumb. ' +
            'It is the best ever masterpiece which is making a possible of by all efforts combined of lab. ' +
            'All lie and all conspiracy can see through if only have this.<br>' +
            '*is a device that detects the sweating only and can not guarantee that whether penetrable a lie actually'
        }, {
          name: 'Bamboo the copter camera',
          price: 'Special price 5,480 yen',
          description: 'CCD camera of spin flier toy. When the latest AV equipment and traditional crafts of Japan is fused, ' +
            'barriers of a past and the future is disappeared, revolutionary feature called Aerial Photography by no power has been realized.<br>' +
            '*video captured is a condition which is rotating violently but is not mean that is a failure or nothing. We making no claim for this regard.'
        }, {
          name: 'Bit particle gun',
          price: 'Special price 1,098 yen',
          description: 'Thing with embedded TV remote control in the ray gun toy. By closed the trigger toward the TV, ' +
            'it is possible to switch the channel as if shooting a gun just like. Now, remember the childhood!<br>' +
            '*responsive button is "next the channel" only. For (Power, volume control, etc.) the other buttons, ' +
            'you need to work with directly at the TV main body.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.gadgets-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}

p.left {
  text-align: left;
}
</style>
