import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Alert, Heading, Page } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Alerts</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <Alert type="primary"  >A alert component of primary type</Alert>
            <Alert type="secondary">A alert component of secondary type</Alert>
            <Alert type="success"  >A alert component of success type</Alert>
            <Alert type="danger"   >A alert component of danger type</Alert>
            <Alert type="warning"  >A alert component of warning type</Alert>
            <Alert type="info"     >A alert component of info type</Alert>
            <Alert type="light"    >A alert component of light type</Alert>
            <Alert type="dark"     >A alert component of dark type</Alert>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Japanse</Heading>
            <Alert type="primary"  >圏論（けんろん、category theory）は、数学的構造とその間の関係を抽象的に扱う数学理論の 1 つである。 考えている種類の「構造」を持った対象とその構造を反映するような対象間の射の集まりからなる圏が基本的な考察の対象になる。</Alert>
            <Alert type="secondary">意味論（いみろん、英: semantics）とは、言語学では統語論に対置される分野、数学（とくに数理論理学）では証明論に対置される分野で、それらが中身（意味）に関与せず記号の操作によって対象を扱うのに対し、その意味について扱う分野である。なお、一般意味論というものもあるが、言語の使用に関する倫理を扱うものであり、ありていに言って無関係である。</Alert>
            <Alert type="success"  >数学の多くの分野において、型射あるいは射（しゃ、英: morphism; モルフィズム）は、ある数学的構造を持つ数学的対象から別の数学的対象への「構造を保つ」写像の意味で用いられる（準同型）。この意味での射の概念は現代的な数学のあらゆる場所で繰り返し生じてくる。例えば集合論における射は写像であり、線型代数学における線型写像、群論における群準同型、位相空間論における連続写像、… といったようなものなどがそうである。</Alert>
            <Alert type="danger"   >集合論（しゅうごうろん、英: set theory, 仏: théorie des ensembles, 独: Mengenlehre）は、集合とよばれる数学的対象をあつかう数学理論である。</Alert>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">With a title</Heading>
            <Alert title="Info">
              A alert component of primary type.
              1234567890{'\n'}
              abcdefghijklmnopqrstuvwxy
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Alert>
            <Alert type="warning" title="写像">
              写像（しゃぞう、mapping, map）とは、二つの集合が与えられたときに、一方の集合の各元に対し、他方の集合のただひとつの元を指定して結びつける対応のことである。函数（関数）、変換、作用素、射などが写像の同義語として用いられることもある。
            </Alert>
            <Alert type="info" title="群論">
              群論（ぐんろん、英語: group theory）とは、群を研究する学問。 群の概念は抽象代数学における中心的な概念。
            </Alert>
            <Alert type="light" title="群">
              数学における群（ぐん、英: group）とは最も基本的と見なされる代数的構造の一つである。群はそれ自体興味深い考察対象であり、群論における主要な研究対象となっているが、数学や物理学全般にわたってさまざまな構成に対する基礎的な枠組みを与えている。
            </Alert>
            <Alert type="dark" title="モナド">
              数学の一分野である圏論において、モナド（英語: monad）あるいはトリプル（英語: triple）とは（自己）関手と2つの自然変換の三つ組である。モナドは随伴関手の理論で使われ、半順序集合上の閉包作用素を任意の圏の上へ一般化する。モナドという名前は、対応する圏を一般化するというモナドの動作に注目して、ソーンダース・マックレーンが哲学用語である「モナド」を借用した。
            </Alert>
          </View>
        </View>
      </Page>
    );
  }
}
