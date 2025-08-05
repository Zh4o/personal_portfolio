---
title: Cloning Myself
date: 2025-08-05
layout: post.njk
tags:
  - post
---

My friend sent me an album by Possible Humans called Everybody Split this morning and I had been giving it a listen. It's quite good and feels very 90s. I have also been thinking about the question I had last time:

> Fine-tuning and choosing the right model to begin with. Is it even possible to tune a model to the creator's voice? What personality traits and 'memories' from the creator should be included?

I was able to both get a download of my iMessage data (in .txt) and also my Instagram/Facebook conversation data in .json. It turned out to be over 3.5gbs and 270,000 back and forths. I believe this is certainly enough data to make a "me-LoRA". There are a few big questions that I must answer first:

1. *There is a lot of sensitive information* - could I use something like a [GliNER](https://github.com/urchade/GLiNER) to quickly go through the entire .txt iMessage file?

It seems pretty easy in that I can just first import:

```
from gliner import GLiNER

model = GLiNER.from_pretrained("urchade/gliner_base") 
```

and after cleaning the data, something like:

```
entities = model.predict_entities(stripped_line, entity_labels)
```

2. The NER should be able to remove any PII, but *what about the conversation content itself?*

There is going to be some things I say to some friends that I don't want other friends to know. Maybe my clone will need to be conversation specific since my relationships are truly 1:1. This will have implications for Tease as well, as conversations without any context should have a default personality. The default personality has to be created somehow. I'm thinking there are layers to this:

1. **Level 1: Strangers** - Our personality is a bit different when we are talking with strangers
2. **Level 2: Acquaintances** - This are the people we don't really share that much about ourselves yet but this can also quickly evolve into friendships. We don't shittalk people with acquaintances.
3. **Level 3: Friends** - These are the people we can really trust. This is where it becomes 1:1, because we would tell certain friends things and shittalk could be here.

Anyways, this was rambling, but hopefully I can make these three versions of myself by the next update. I wonder if I can even host it for everyone to give it a try.

