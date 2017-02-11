import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.Random;


public class OrdinaArray {

	
	
	/*
	 * Fonde due sequenze ordinate e restituisce il numero di confronti
	 */
	private static  int merge(int A[], int p, int q, int r,int aus[]){
		// da implementare

		return numConfronti;
		
	}
	
	/*
	 * Algoritmo mergesort per l'ordinamento di un array di interi A
	 * usando come relazione d'ordine totale "<="
	 * @param A
	 */
	static int mergesort(int A[], int inf, int sup, int aus[]){
		int numConfronti=0;
		// da implementare
		return numConfronti;
	}

	static int mergesort(int A[]){
		int aus[]=new int[A.length];
		return mergesort(A, 0, A.length-1, aus)
	}



	
	/*
	 * Inizializza l'array di interi A con numeri interi generati in maniera casuale 
	 * con valore tra 1 e A.length
	 * @param A
	 */
	static void inizializzaArrayCasuale(int A[]){

// da implementare	

	}
	
	/*
	 * Inizializza l'array di interi A con i numeri interi 1, 2, 3,..., A.length
	 * @param A
	 */
	static void inizializzaArrayCrescente(int A[]){

// da implementare

	}
	/*
	 * Inizializza l'array di interi A con numeri interi A.length, A.length-1,...,2, 1
	 * @param A
	 */
	static void inizializzaArrayDecrescente(int A[]){

// da implementare

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
		// da implementare
		
		int i, maxDim, step;
		int contatoreCasualeBubble,contatoreCrescenteBubble,contatoreDecrescenteBubble;
		int contatoreCasualeSelection,contatoreCrescenteSelection,contatoreDecrescenteSelection;
		int contatoreCasualeInsertion,contatoreCrescenteInsertion,contatoreDecrescenteInsertion;
		int contatoreCasualeQuick,contatoreCrescenteQuick,contatoreDecrescenteQuick;
		int contatoreCasualeMerge,contatoreCrescenteMerge,contatoreDecrescenteMerge;
		maxDim=new Integer(args[0]).intValue();
		step=new Integer(args[1]).intValue();
		try{
		    FileOutputStream file = new FileOutputStream("statistica.csv");
		    PrintStream Output = new PrintStream(file);
		    Output.println("dimArray, nroConfrontiBubbleCasuale, nroConfrontiBubbleCrescente, nroConfrontiBubbleDecrescente, nroConfrontiSelectionCasuale, nroConfrontiSelectionCrescente, nroConfrontiSelectionDecrescente, nroConfrontiInsertionCasuale, nroConfrontiInsertionCrescente, nroConfrontiInsertionDecrescente, nroConfrontiQuickCasuale, nroConfrontiQuickCrescente, nroConfrontiQuickDecrescente, nroConfrontiMergeCasuale, nroConfrontiMergeCrescente, nroConfrontiMergeDecrescente");
			
			for(i=step; i<=maxDim; i+=step)
			{
				int A[]=new int[i];
				int temp[]=new int[i];
				System.out.println("Array di dimensione " + i);
				System.out.println("***************************************************");
				System.out.println("Uso del generatore di numeri casuali");
				inizializzaArrayCasuale(temp);
				A=Arrays.copyOf(temp,temp.length);
				System.out.println("Bubble sort");
				stampaArray(A);
				contatoreCasualeBubble=bubblesort(A);
				System.out.print(": " + contatoreCasualeBubble + " confronti per ottenere ");
				stampaArray(A);
				System.out.println("");
				System.out.println("Selection sort");
				A=Arrays.copyOf(temp,temp.length);
				stampaArray(A);
				contatoreCasualeSelection=selectionsort(A);
				System.out.print(": " + contatoreCasualeSelection + " confronti per ottenere ");
				stampaArray(A);
				System.out.println("");
				
				System.out.println("Insertion sort");
				A=Arrays.copyOf(temp,temp.length);
				stampaArray(A);
				contatoreCasualeInsertion=insertionsort(A);
				System.out.print(": " + contatoreCasualeInsertion + " confronti per ottenere ");
				stampaArray(A);
				System.out.println("");
			
				System.out.println("Quicksort sort");
				A=Arrays.copyOf(temp,temp.length);
				stampaArray(A);
				contatoreCasualeQuick=quicksort(A,0,A.length-1);
				System.out.print(": " + contatoreCasualeQuick + " confronti per ottenere ");
				stampaArray(A);
				System.out.println("");
				
				System.out.println("Merge sort");
				A=Arrays.copyOf(temp,temp.length);
				stampaArray(A);
				contatoreCasualeMerge=mergesort(A,0,A.length-1);
				System.out.print(": " + contatoreCasualeMerge + " confronti per ottenere ");
				stampaArray(A);
				System.out.println("");
			
				// ordinare array inizializzati in ordine ordine crescente
				
				// ordinare array inizializzati in ordine ordine decrescente

				
				Output.println(i+","+contatoreCasualeBubble+","+contatoreCrescenteBubble+","+contatoreDecrescenteBubble+","+contatoreCasualeSelection+","+contatoreCrescenteSelection+","+contatoreDecrescenteSelection+","+contatoreCasualeInsertion+","+contatoreCrescenteInsertion+","+contatoreDecrescenteInsertion+","+contatoreCasualeQuick+","+contatoreCrescenteQuick+","+contatoreDecrescenteQuick+","+contatoreCasualeMerge+","+contatoreCrescenteMerge+","+contatoreDecrescenteMerge);
			}
			Output.close();
		}
		catch (IOException e) {
	      System.out.println("Errore: " + e);
	      System.exit(1);
	    }
	
		

	}
	}

