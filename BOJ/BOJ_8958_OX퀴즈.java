/*
"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.
"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

<입력>
첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.

<출력>
각 테스트 케이스마다 점수를 출력한다.
*/

import java.io.IOException;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st;
		
		int count = Integer.parseInt(br.readLine());
		String[] lines = new String[count];
		int[] scores = new int[count];
		
		for(int i=0; i<count; i++) {			
			st = new StringTokenizer(br.readLine());
			lines[i] = st.nextToken();
		}
		
		for(int i=0; i<count; i++) {			
			int score = 0;
			int n = 0;
			
			for(int j=0; j<lines[i].length(); j++) {
				String line = lines[i];
				
				if(line.substring(j,j+1).equals("O")) {
					score += ++n;
				}
				
				if(line.substring(j,j+1).equals("X")) {
					n = 0;
				}
			}
			
			scores[i] = score;
		}
		
		for(int i=0; i<count; i++) {			
			bw.write(scores[i] + "\n");
		}
		
		bw.close();
	}

}

/*
다시금 깨달은 부분
- StringTokenizer로 한 줄을 읽어오겠다는 것이기 때문에(br.readLine()이므로) 여러 줄을 입력받고 싶으면 반복문 안에서 new StringTokenizer를 다시 받아야 함
- n에 대해서 : 한 줄에서의 각각의 O, X에 대해 n이 0이 되든지, ++n이 되어 점수에 적용되는지를 따지는 것이므로 j의 반복문 안이 아닌, 상위에 있어야 함
  (j 반복문 안에 있으면 각 O, X에 대하여 초기화되기 때문)
*/
