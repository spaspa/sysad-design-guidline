# Color

## ブランドカラー
<color-panel title="traQ Blue" hex="005BAC" />
traP Blueと同じ色をtraQサービス全体のブランドカラーとして用いています。

ロゴの表示等は、基本としてこの色を用いてください。

## デフォルトカラーパレット
traQのテーマはカスタマイズ可能なため、ここではデフォルトテーマで用いているカラーパレットを示します。

### 基本色

#### アクセントカラー
<color-panel title="traQ Blue" hex="005BAC" />
traQ Blueをアクセントカラーとして使ってください。

#### 背景色
<link-card-container>
<color-panel title="Background-primary" hex="FFFFFF" />
<color-panel title="Background-secondary" hex="F0F2F5" />
</link-card-container>
背景色には基本としてこれらの色を用いてください。

メッセージ表示等、主たるコンテンツの背景色はprimaryです。
traQの中で最も表示される面積が大きい色になります。

主たるコンテンツと区別する必要のある箇所の背景色にはsecondaryを用いてください。サイドバーの背景色などがその一例です。

<callout title="主たるコンテンツ？" >
メッセージ以外にも主たるコンテンツとなる箇所はあります。
例えば、モーダルが表示されている間はモーダルの内容以外とインタラクションが取れないため、モーダルの内容が主たるコンテンツです。
</callout>


### 補助的な背景色
<link-card-container>
<color-panel title="Background-tertiary" hex="E2E5E9" />
</link-card-container>

Background Secondaryの上にさらに重ねて表示する場合など、背景色で補助的に用いる色です。
Qall中にナビゲーションバーに出てくるUIなどに用いています。

#### テキスト色
<link-card-container>
<color-panel title="Text-primary" hex="333333" />
<color-panel title="Text-secondary" hex="79797A" />
</link-card-container>

メッセージのテキスト色にはこれらの色を用いてください。
投稿した部分本体のテキスト色がprimary、引用などのテキスト色がsecondaryです。

<callout type="danger" >
テキスト色は今後変更の可能性があります。
</callout>

#### UI色
<link-card-container>
<color-panel title="UI-primary" hex="49535B" />
<color-panel title="UI-secondary" hex="6B7D8A" />
<color-panel title="UI-tertiary" hex="CED6DB" />
</link-card-container>

メッセージ以外のUIのテキスト色に使うパレットです。

そのUIで表示すべき重要な情報はprimary、その他の情報にはsecondaryを用います。
セパレーターなど、視覚的な区切りをつける目的でtertiaryも使用できます。

また、inactiveな文字にはopacityを0.5にしたUI-secondaryを用いてください。

<callout type="info">
UI-secondaryをリストのセクションタイトルの文字色として使っている部分が多くあります。
このような場合、視認性を確保するために太字にするなどの工夫をしてください。
</callout>

### 用途が限定されている色

何かしらの意味を持っている色です。
これらの色は**関係ない文脈では使用しないでください。**

#### インジケーター関連色
<link-card-container>
<color-panel title="Accent-online" hex="28F0E4" />
<color-panel title="Accent-notied" hex="F2994A" />
</link-card-container>

ユーザーがオンラインであることや、未読メッセージの存在を示すために用いる色です。

#### Qall関連色
<link-card-container>
<color-panel title="Common-qall" hex="00ACA2" />
</link-card-container>

Qallを表すために用いる色です。

#### 警告色
<link-card-container>
<color-panel title="Accent-error" hex="F26451" />
</link-card-container>

危険な操作を実行するボタンや、エラーであることを示すために用いられる色です。

## 色彩設計の方針

以下はtraQの色彩設計に関する考え方です。

- SysAd班のプロダクトはtraP部員が日常的に使うものであるため、日常的に用いることが辛くならない色彩設計を考えること
    - 彩度の高い色は多用せず、重要な情報などのアクセントのみに用いる
    - 全体として白などの無彩色を背景の基本とする
- 少し明度を落とした背景色を使う場合、primary colorの色相にして彩度を多少入れた色を使うと良い
