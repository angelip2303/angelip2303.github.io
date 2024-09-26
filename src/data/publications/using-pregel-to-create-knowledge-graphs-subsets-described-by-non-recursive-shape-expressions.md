---
title: Using Pregel to Create Knowledge Graphs Subsets Described by Non-recursive Shape Expressions
authors:
  - Ángel Iglesias Préstamo
  - Jose Emilio Labra Gayo
date: October 2023
book: Knowledge Graphs and Semantic Web
conference: Knowledge Graph and Semantic Web Conference
featured: true
path: /public/pdf/using-pregel-to-create-knowledge-graphs-subsets-described-by-non-recursive-shape-expressions.pdf
doi: https://link.springer.com/chapter/10.1007/978-3-031-47745-4_10
---

# Using Pregel to Create Knowledge Graphs Subsets Described by Non-recursive Shape Expressions

Knowledge Graphs have been successfully adopted in recent years, existing general-purpose ones, like Wikidata, as well as domain-specific ones, like UniProt. Their increasing size poses new challenges to their practical usage. As an example, Wikidata has been growing the size of its contents and their data since its inception making it difficult to download and process its data. Although the structure of Wikidata items is flexible, it tends to be heterogeneous: the shape of an entity representing a human is distinct from that of a mountain. Recently, Wikidata adopted Entity Schemas to facilitate the definition of different schemas using Shape Expressions, a language that can be used to describe and validate RDF data. In this paper, we present an approach to obtain subsets of knowledge graphs based on Shape Expressions that use an implementation of the Pregel algorithm implemented in Rust. We have applied our approach to obtain subsets of Wikidata and UniProt and present some of these experiments’ results.
