## Node
```bash
16.14.2
```

## 環境構築

```bash
yarn install

yarn dev
```

## Linter
eslint, stylelint, 型チェック spellチェック, jestのテストが走ります 

```bash
yarn check-all
```

## storybook
```bash
yarn storybook
```

---

## 実装したこと(環境構築)
- Linter系の導入
- githubActionsでlintの管理
- Jestでの単体テスト
- OpenAPIによる型定義管理
- OpenAPI2Aspidaによる、APIの型管理
- Storybook導入
- Storybook,play関数の初期動作まで

## 実装したこと(実装)
- 画面全体の実装
- APIのキャッシュ処理
- API系のエラー処理

## 実装できてないこと
- Componentのテスト
- E2Eテスト
- Chartの各都道府県の色を変更する
- 各色の線がなにを示すかを表示する処理

