using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class WorkersUIController : MonoBehaviour {

	public void changeScene(string Name)
    {
        SceneManager.LoadScene(Name);
    }
}
