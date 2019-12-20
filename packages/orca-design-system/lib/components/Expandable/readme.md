This component is to be used when there is a lot of content to present on a page that can instead be split into expandable sections to aid in user comprehension and explorability, rather than overwhelming the user with a whole page of content.

A single expandable can also be used, for example if you had some content, but wanted to also have some additional less important subsidiary content hidden away unless the user wants to explore further, e.g. A few paragraphs on a company description, followed by an expandable with the title 'Read more about the history of this company'.

This component supports any child elements, not just text, can be other components or any content you like.

```js
<Expandable title="Details">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  consequuntur magni dolores eos qui ratione voluptatem.
</Expandable>

<Expandable title="Location">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  consequuntur magni dolores eos qui ratione voluptatem.
</Expandable>

<Expandable title="People">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  consequuntur magni dolores eos qui ratione voluptatem.
</Expandable>

<Expandable
  title="Complex example"
  subtitle="Subtitle"
  badge="status"
  badgeColour="primaryDark"
>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  consequuntur magni dolores eos qui ratione voluptatem.
</Expandable>
```
