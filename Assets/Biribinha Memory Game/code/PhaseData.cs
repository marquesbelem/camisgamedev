using System;
using System.Collections.Generic;
using UnityEngine;

namespace BiribinhaMemoryGame
{
	[CreateAssetMenu(fileName = "Phase", menuName = "Biribinha Memory Game/PhaseData")]
	public class PhaseData : ScriptableObject
	{
		public int ID;
		public List<CardData> Cards;
		public int MaxAmountEachCard;
		public Vector2 SizeGrid;
		public float MarginCard;
		public float FontSize;
	}
}