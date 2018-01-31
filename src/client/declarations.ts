// allow to import vue files in ts files
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}