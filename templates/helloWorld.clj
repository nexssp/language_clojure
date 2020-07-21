
; Nexss PROGRAMMER 2.x - Clojure
; Default template for JSON Data
; profiles.clj must be copied first to your ~/.lein/profiles.clj
(require '[jsonista.core :as j])
(doseq [ln (line-seq (java.io.BufferedReader. *in*))]
   (def parsed-json (j/read-value ln))
   (def nexss-stdout (assoc parsed-json :helloFromClojure (clojure-version)))
   (println (j/write-value-as-string nexss-stdout))
)
