import { number, string, arrayOf, shape, objectOf } from 'prop-types';

export default shape({
  email: string,
  password: string,
  user: string,
  proxy: shape({
    host: string,
    port: string,
    user: string,
    password: string,
    stringValue: string
  }),
  botConfig: shape({
    startAtH: number,
    startAtM: number,
    endAtH: number,
    endAtM: number,
    likePerDay: number,
    mediaMaxLike: number,
    mediaMinLike: number,
    followPerDay: number,
    followTime: number,
    unfollowPerDay: number,
    commentsPerDay: number,
    commentList: arrayOf(arrayOf(string)),
    tagList: arrayOf(string),
    tagBlacklist: arrayOf(string),
    userBlacklist: objectOf(string),
    maxLikeForOneTag: number,
    unfollowBreakMin: number,
    unfollowBreakMax: number
  })
});
