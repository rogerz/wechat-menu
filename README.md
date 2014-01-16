# wechat-menu

deploy wechat custom menu automatically with github and travis-ci

[![build status](https://secure.travis-ci.org/rogerz/wechat-menu.png)](http://travis-ci.org/rogerz/wechat-menu)

## Usage

Just push a modified `data/menu.json` to update the custom menu

## Install

1. fork this project
2. switch on travis-ci in [your accounts page](https://travis-ci.org/profile) for your project
3. replace the secure data in `.travis.yml` with your encrypted appID and appSecret. See steps below for details.
4. create your own `menu.json`
5. push the changes to github

### Encrypt app keys

```bash
$ gem install travis
$ travis encrypt APP_ID=your-app-id --add
$ travis encrypt APP_SECRET=your-app-secret --add
```

## Hint

1. include `[ci skip]` in your commit message to skip menu update

## To Do

1. detect failure status
2. print debug information in travis log (muted stdout for now to protect the secret)
3. disable building for pull request

### Nice To Have

1. local preview of the menu (low priorty as wechat refreshes the menu in just a few minutes)
