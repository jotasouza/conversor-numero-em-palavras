# Convertendo números para palavras

## Resumo

Aplicação que retorna  todos os números de 1 até 1000 **por extenso**, por exemplo, "cento e dezessete" ou "trezentos e quarenta e dois".

Tentei utilizar listas de objetos pré-definidos para mapear a posição de valores numéricos em strings que representam a palavra por extenso correspondente. Por exemplo, uma destas listas pode ser assim:

```
const unidades = {0: "zero", 1: "um", 2: "dois", 3: "três", 4: "quatro"}
```

