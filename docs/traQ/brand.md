# Brand
traQのデザインを行う上での基盤となる考え方です。

## Principle
### 01
**traQは「部員間のコミュニケーションを担う」traPのコアとなるサービスです。**
- traQのデザイン原則はtraPのデザイン原則に沿っている必要があります
- traQのデザイン原則はtraPのデザイン原則に影響を与え得ます

### 02
**traQの目的は、traPの「部室」としての役割を果たすことです。**
- スタンプなど、多様なコミュニケーションの方法を提供します
- traQ上で行われている会話へのアクセスは、全てのユーザーに対し容易であるべきです

### 03
**traQの使い勝手は、習熟度によらず心地よいものであるべきです。**
- 全てのユーザーに対し、支障なく利用が開始できるUI・UXを提供します

## Functional / Recognition Pattern
以上の原則を達成するために、次のような機能パターン・認知パターンをおきます。

### 01
**traQの主たるコンテンツはユーザー間のコミュニケーションであり、UI要素はそれらの認識を阻害すべきではありません。**
- デフォルトで提供するUIのカラーパレットは、デフォルトで表示されるUI要素を過剰に目立たせるべきではありません
- テキストの入力、及び閲覧を阻害する要因は極力排除すべきです
- リアクションなどの機能は、極力素早く入力でき、かつユーザーにとって最適となるような候補を提供すべきです
- エラー通知は正しく行う必要があります

### 02
**traP内の膨大なコミュニケーションをコンテキストに紐付けることを支援します。**
- コンテキストを作る機能を積極的に考慮すべきです
    - チャンネル階層、及びそのアクセス性
    - スレッド機能
    - チャンネル上での通話
- 一方で、特定のコンテキストに依存しないコミュニケーション手段も重要なため、それらの支援も行います
    - ホームチャンネル機能

### 03
**習熟度に応じ、適切なカスタマイズや、それらに基づく新たなコミュニケーションを提供します。**
- ナビゲーション等のショートカット・カラースキームはカスタマイズ可能であることが望ましいです
- カラースキーム・スタンプパレットなど、カスタマイズしたものはある程度の共有可能性を持たせるべきです