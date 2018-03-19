# Contributing to Future Gadget Lab

First of all, thanks a lot for taking the time to contribute!

Actually, we are only accepting pull requests for questions related to
i18n of the project. Can be a new translation, or a fix to an existing
one.

The project uses the [vue-i18n] package, so maybe you want to
read their documentation to know a little more how the i18n system
works.

[vue-i18n]: https://kazupon.github.io/vue-i18n/

## Instructions to a new language

1. Duplicate your translation base file in the `lang` folder and
   translate all the strings you want, as follows:

   ```javascript
   export default {
     general: {
       title: 'Laboratorio de Gadgets del Futuro',
       back: 'volver'
     },
     ...
   } 
   ```

   The name of the file must follow the [ISO 639-1] codes.
   In this case, it's a spanish translation, so the name
   must be `es.js`.

   The main advice is to translate from the japanese,
   because the english translation is purposely very bad.

[ISO 639-1]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

2. After translating all the strings, you need to link your
   translation in the `src/lang.js` file, as follows:

   ```javascript
   import en from '../lang/en'
   import jp from '../lang/jp'
   import es from '../lang/es'  // Your translation file.

   export default {
     'en': en,                  // Here the strings must follow
     'jp': jp,                  // too the ISO 639-1 codes, but
     'es': es                   // in lower case.
   }
   ```

3. You need to link your translation in the
   `src/components/TheTopPage.vue` file too, in the
   `<script>` section, as follows:

   ```vue
   <script>
   export default {
     ...
     data () {
       return {
         languages: [
           { name: 'English', label: 'en' },
           { name: 'Español', label: 'es' },
           { name: '日本語', label: 'jp' },
         ]
       }
     },
     ...
   }
   </script>
   ```

   Please keep the list alphabetized.

When you finish, don't forget to commit your updates in the branch
you have created, and submit an pull request explaining what you have
updated.