
; Nexss PROGRAMMER 2.0.0 - Clojure
; Default template for JSON Data
; profiles.clj must be copied first to your ~/.lein/profiles.clj
(require '[jsonista.core :as j])
; TODO:to finish this module
(doseq [ln (line-seq (java.io.BufferedReader. *in*))]
   (println ln))
   
;    (println (j/write-value-as-string ln)))

; (defn -main []
;   (let [in (slurp *in*)]
;     (println in)))
