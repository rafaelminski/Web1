import java.io.IOException;
import java.util.Scanner;
/**
 * IMPORTANT: 
 *      O nome da classe deve ser "Main" para que a sua solução execute
 *      Class name must be "Main" for your solution to execute
 *      El nombre de la clase debe ser "Main" para que su solución ejecutar
 */
public class java{
 
    public static void main(String[] args) throws IOException {
 
        Scanner sc = new Scanner(System.in);

        while (true) {
            int N = sc.nextInt();
            
            // Verifica se o número de vezes jogadas é igual a zero, indicando o fim da entrada
            if (N == 0) {
                break;
            }

            int mariaWins = 0;
            int joaoWins = 0;

            for (int i = 0; i < N; i++) {
                int resultado = sc.nextInt();
                
                // Incrementa o contador de vitórias de acordo com o resultado
                if (resultado == 0) {
                    mariaWins++;
                } else {
                    joaoWins++;
                }
            }

            System.out.println("Mary won " + mariaWins + " times and John won " + joaoWins + " times");
        }

        sc.close();
 
    }
 
}