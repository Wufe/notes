import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;



public class RicercaArray {

		
	/*
	 * Algoritmo ri ricerca sequenziale di un elemento in un array
	 */
	static boolean sequentialSearch(int A[], int x, int numeroConfronti[])
	{
		numeroConfronti[0]=0;
		boolean trovato=false;
		for(int i=0;i<A.length;i++){
			numeroConfronti[0]++;
			if(A[i]==x){
				trovato=true;
				break;
			}
		}
		return trovato;
	}
	
	/*
	 * Algoritmo ri ricerca binaria di un elemento in un array ordinamento
	 */
	static boolean binarySearch(int A[], int x, int numeroConfronti[])
	{
		numeroConfronti[0]=0;
		boolean trovato=false;
		
		// TO DO



		return trovato;
	}
	
	
	
	/*
	 * Inizializza l'array di interi A con i numeri interi 1, 2, 3,..., A.length
	 * @param A
	 */
	static void inizializzaArrayCrescente(int A[]){
		int i;
		for(i=0;i<A.length;i++)
			A[i]=i+1;
	}
	
	/*
	 * Stampa gli elementi contenuti nell'array A
	 * @param A
	 */
	static void stampaArray(int A[]){
		int i;
		for(i=0;i<A.length;i++)
			System.out.print(A[i]+ " ");
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	}

