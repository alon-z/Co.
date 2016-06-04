using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class MainUIController : MonoBehaviour {

    public void changeScene(string Name)
    {
        SceneManager.LoadScene(Name);
    }
}
