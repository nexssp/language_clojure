# Clojure for Nexss Programmer 2.0

Clojure implementation for Nexss Programmer.

## Todo - automate the process for installing exec and jsonista

Now you need to add it manually:

.lein/profiles.clj -> ~/.lein/profiles.clj

## Some Clojure Examples

```sh
clj -Sdeps '{:deps {metosin/jsonista {:mvn/version "0.2.4"}}}'
```

```clj
Clojure 1.10.0
user=> (require '[jsonista.core :as j])
nil
user=> (j/read-value (read-line))
{"foo": "bar"}
{"foo" "bar"}
```

## Links

[Leiningen - "for automating Clojure projects without setting your hair on fire"](https://leiningen.org/)  
[Lein Plugins](https://github.com/technomancy/leiningen/wiki/Plugins)
