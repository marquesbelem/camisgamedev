using UnityEngine;

namespace BalloonGame
{
	[CreateAssetMenu(fileName = "Balloon", menuName = "Balloon Game/BalloonData")]
	public class BalloonData : ScriptableObject
	{
		public int Score;
		public Sprite Sprite;
	}
}