ype4  .System.Windows.Automation.AutomationProperties �� Property �� Value �� Path �� 
TargetType �� Padding # SearchResultItemContentTemplate �� DataType,   &Autodesk.Internal.Windows.SearchResult ��Name �Name � ColumnDefinitions ��Name ��Name �� Triggers P� Property P� Value �� 
TargetName �� Binding �� Value ^� 
Conditions  �� Binding! �� ElementName" �� Value'   !Autodesk.Windows.ComponentManager#   Settings$ �� Source  SearchResultItemTemplate(   "Autodesk.Windows.RibbonItemControl%  Name$   Autodesk.Windows.KeyTipService&   PlacementTarget'   ActivationTarget> 8Autodesk.Inventor.InvAIRLookContent.AppFrameSearchButton(  Name) �� 	Converter* �� RelativeSource+ �� Mode, �� AncestorType   ListBoxItemGenericBasicStyle- �� Triggers " SearchResultItemContainerStyle. �� BasedOn8  2Autodesk.Inventor.InvAIRLookContent.AppFrameSearch/ �� 	Resources> 8Autodesk.Inventor.InvAIRLookContent.StripMarkupConverter  Key:	 4Autodesk.Inventor.InvAIRLookContent.ISO8601Converter@
 :Autodesk.Inventor.InvAIRLookContent.CategoryValueConverter " AppFrameSearch_BackgroundBrush " AppFrameSearch_ForegroundBrush0 ��Name1 �Name2 � 	StaysOpen3 � AllowsTransparency4 �Name-  'System.Windows.Input.KeyboardNavigation5   TabNavigation  TextBlockFacetStyle6 � RowDefinitions7 F�Name8 �� Padding9 ��Name:   AutomationId;   Name< ]�Name= ^� InitialShowDelay> ^� ShowDuration? ��Name@ � 	ResourcesA � ToolTipB _� 	PlacementC _� VerticalOffsetD _� HorizontalOffset  	converterE �� TextAlignmentF �� Orientation  categoryValueConverter  dateConverter�� D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    :x,http://schemas.microsoft.com/winfx/2006/xaml     9adw1clr-namespace:Autodesk.Windows;assembly=AdWindows  MtbariCclr-namespace:Autodesk.Internal.Windows.ToolBars;assembly=AdWindows  Csrci:clr-namespace:Autodesk.Internal.Windows;assembly=AdWindows  TinvLclr-namespace:Autodesk.Inventor.InvAIRLookContent;assembly=InvAIRLookContent  .sys&clr-namespace:System;assembly=mscorlib  ;local1clr-namespace:Autodesk.Inventor.InvAIRLookContent  8d2http://schemas.microsoft.com/expression/blend/2006  IpsoAhttp://schemas.microsoft.com/winfx/2006/xaml/presentation/options  Bmc;http://schemas.openxmlformats.org/markup-compatibility/2006  ResourceDictionary_1��%l)  &	        &	      &	 >     7   7  &	 �     7  7  &	     &	 7    &	 m    &	 �    &		 �    &	
     &	 E    &	 �    &	 �    &	 �    &	     &	 T    &	 �    &	 �    7  7 
 &	 8    7  7  7  7  7  &	 �
    7  7 	 7  7  &	 �    7  7  &	 �    7  7  7  7  '  �    7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  ��Color_1��	#FFFFFFFF����Color_2��	#FFABABAB���� 4True LinearGradientBrush_1��$	  0,0&�$	 0,1&�.��� GradientStop_1��8   $ 0Q�� GradientStop_2��8  $ 1Q�   PrimaryStatusBar��8   8  
 ���� 
 ���� �� 4True SolidColorBrush_105��$ 	LightGray���� 4True SolidColorBrush_8��$ Transparent��u� Thickness_36��$	 3Q�$
 3Q�$ 0Q�$ 0Q�u� Thickness_33��$	 0Q�$
 3Q�$ 0Q�$ 0Q�u� Thickness_28��$	 0Q�$ 0Q�$
 0Q�$ 0Q�u� Thickness_35��$	 0Q�$
 0Q�$ 0Q�$ 0Q�u� Thickness_3��$	 0.0Q�$	 0.0Q�$		 0.0Q�$	
 0.0Q��� 4True SolidColorBrush_106��$ Black���� 4True SolidColorBrush_12��$ 	#FF30306F���� 4True SolidColorBrush_14��$ 	LightGray���� 4True SolidColorBrush_104��$ 	#FF0160BF���� 4True SolidColorBrush_92��$ 	#00FFFFFF����  BooleanToVisibilityConverter���� Style_12��" ��.��� Setter_2�� �@ AutomationId �� $ Id��� Setter_3�� �@ Name �� $ AutomationName��� Setter_4�� �@�FocusVisualStyle Z� �� Setter_5�� � |� .  �� Setter_6�� � ��8   �� Setter_7�� � �� �� ControlTemplate_5��" ��.R��� Border_1��#��z��# z��8�� ._��� ContentPresenter_3���� DataTemplate_4��"  .R��� $ mBorder��mBorder��$��2q����	#FFF0F0F0$��0,3,0,0q�._�� $ mGrid��
Grid_5��$��Stretch=� �� ColumnDefinition_10��$
��Auto ��� ColumnDefinition_11��$
��Auto ��� ColumnDefinition_12��$��* �.+��� $ mImage��
mImage��$��16��$��16��$
��Left=�$��0��$��Center=�$��Center=�$��2,1,2,1q����� *Image+�� $ mText��	mText��$
��Left=�$��1��#��� ��$��NoWrap=�$��WordEllipsis=�8��  $��Center=�$��Center=����� *Name+�� $ 	mPathText��	mPathText��$��Right=�$��2��8�� #��� ��$��NoWrap=�$��WordEllipsis=�$��Italic$�8�� $��Center=�$��Right=����� *Path+ P� 	Trigger_2�� �@J�IsMouseOver . . ��� 	Setter_30��$ mGrid�� � �� �#C7EAFC�� 	Setter_40��$ mBorder�� � ��
 ��ح��� DataTrigger_1�� �� *Name+ Z� .a��� Setter_8��$ mText�� �� *Text+ � ���� DataTrigger_2��$ false�� �� *	IsEnabled+.a��� Setter_9��$ 	mPathText��8   � ���� 	Setter_10��$ mText��8   � ���� 	Setter_29��$ mImage�� �@J�Opacity$	 0.2Q�^� MultiDataTrigger_2�� �� Condition_3��  �� *	IsEnabled+$! mImage��	" False�� Condition_4��  �� *CanPixelShaderWork+#$ Z# 	" False.0��� 	Setter_12��$ mImage�� �@J�Opacity$
 0.25Q��� DataTemplate_5��"  .R�  $% mRibbonItemControl��mRibbonItemControl��$��Stretch=�$	��402��$	��402��& �� $! mAppFrameSearchButton��' �� $! mAppFrameSearchButton��.��  $( mAppFrameSearchButton��mAppFrameSearchButton��8��  8�� ���� {��� *	IsEnabled+y��� *	IsVisible+8)  ���� ���� *Menu.SearchResultItemTemplate+* �� $+ FindAncestor=�",   �� DataTrigger_3�� �� *Menu.SearchResultItemTemplate+* �� $+ FindAncestor=�",   Z� .a��� 	Setter_13��$ mAppFrameSearchButton��8   � ���� Style_13��" ��.��� 	Setter_14�� � ��
 ���� �� 	Setter_15�� � ��$ 1q��� 	Setter_16�� � ��8   �� 	Setter_17�� � ��$ Stretch=��� 	Setter_18�� � y� �� $ 	IsVisible�8)  �� 	Setter_19�� � ��$ 1,1,1,0q��� 	Setter_20�� �@ AutomationId �� $ Id��� 	Setter_21�� �@ Name �� $ AutomationName��� 	Setter_22�� � �� �� ControlTemplate_6��" ��.R��� Border_2��#��z��#��z��#��z��#��z��# z��._��� ContentPresenter_4��#��z��#��z��- �� DataTrigger_4�� �� $ 	IsEnabled�	 false.a��� 	Setter_23�� � {� .  �� Style_14��8.   " ��.��� 	Setter_24�� � ��8  �� 	Setter_25�� � {� �� $ 	IsEnabled��� 	Setter_26�� �@�FocusVisualStyle Z� - P� 	Trigger_1�� �@��
IsSelected . . ��� 	Setter_27�� � ��8  �� 	Setter_28�� � ��8  �� Style_1��"  / ��   local:StripMarkupConverter_1��	converter 	  local:ISO8601Converter_1��dateConverter 
  "local:CategoryValueConverter_1��categoryValueConverter �� 4True SolidColorBrush_107��"AppFrameSearch_BackgroundBrush $ 	#FFF0F0F0���� 4True SolidColorBrush_108��"AppFrameSearch_ForegroundBrush $ 	#FF3C77F5���� Style_22��TextBlockFacetStyle " ��.��� 	Setter_44�� �@�Cursor$
 Hand���� 	Setter_46�� � ��$ Center=��� 	Setter_48�� � ��8   �� 	Setter_49�� � ��8  �� 	Setter_50�� � ��# � ���� 	Setter_51�� � ��$ 5,0,0,0q�- P� 	Trigger_8�� �@J�IsMouseOver . . ��� 	Setter_45�� � ��8  �� 	Setter_47�� � ��$ 	Underline{�.��� Setter_1�� � �� �� ControlTemplate_1��"  .R�� 
Grid_6��8�� .+�� 
Grid_7��.+��� TextBlock_111��$
��5, 2q�$��Search Help & Commands...��
�������y��� $! PART_TextBox��$ Text.IsEmpty�8)  �� $0 PART_TextBox��PART_TextBox��
������ � $1 PART_TextBoxPopup��PART_TextBoxPopup��$	��425��$	��425��2 .  3 . .���� Border_3��$��0,0,3,8q�$��1q�
�������._��� StackPanel_2��
�������.+��� Rectangle_2��$	��425��$��3��8�� � $
4 root��root��$5 Cycle=�8�� .+��� $ PART_AllButton��PART_AllButton��8�� 	All (0)�� $ PART_CommandsButton��PART_CommandsButton��8�� Commands (0)�� Rectangle_3��$	��425��$��3��8��	 �� StackPanel_5��
�������$��20��.+�� $ PART_CommandsHeader��
Grid_1��$��Stretch=� �� ColumnDefinition_1��$
��Auto ��� ColumnDefinition_2��$��* �6 �� RowDefinition_4��$��* �.+�F� $7 PART_CommandsExpanded��PART_CommandsExpanded��$y�	Collapsed=�$��0��
���   �+����@f��� �@f��[ �@T� ��� �@f��� 	F� $7 PART_CommandsReduced��PART_CommandsReduced��$y�Visible=�$��0��
���   �$��1��+�����ا ��[ �@f��� ��ا ��� ��ا ��[ 	�� TextBlock_107��$��1��
���   �$��14(�$��Normal"�$��Center=�$8 1,0,2,0q�$
��Left=�$
��4, 0q�$��Commands������ Style_17��" �- P� 	Trigger_7�� �@J�IsMouseOver . . ��� 	Setter_35�� � ��
 ������ $ PART_SeeSawGrid��
SeeSawGrid�� �� ColumnDefinition_13��6 �� RowDefinition_1���� RowDefinition_2���� RowDefinition_3���� RowDefinition_5���� RowDefinition_6��.+��� DockPanel_3��$��0��$��0��8��
 $��Stretch=�$��Stretch=�.+��� $9 PART_CommandsListBox��PART_CommandsListBox��$
��Left=�$��0,0,1,0q�8�� $	��Top=�$��Hidden=�$��0q�$��Stretch=�8�� 8�� : �� $ Id�; �� $ AutomationName�.@�>]� $< PART_CommandsWarning��PART_CommandsWarning��$��Stretch=�$��Stretch=�$y�	Collapsed=�.+��� TextBlock_101��
���r���$��25,0,0,1q�$8 	0,25,0,25q�#��� ��$��Center=�$
��Left=�(&No valid commands for this environment]� $< PART_CommandsSearching��PART_CommandsSearching��$��Stretch=�$��Stretch=�$y�	Collapsed=�.+��� TextBlock_105��
���r���$��25,0,0,1q�$8 	0,25,0,25q�#��� ��$��Center=�$
��Left=�Searching commands...�� Rectangle_1��$��1��$	��425��$��3��8�� �� StackPanel_6��$��0��$��2��
�������$��20��.+�� $ PART_AKNHeader��PART_AKNHeader�� �� ColumnDefinition_14��$
��Auto ��� ColumnDefinition_15��$��* �.+�F� $7 PART_AKNExpanded��PART_AKNExpanded��$y�	Collapsed=�$��0��
���   �+����@f��� �@f��[ �@T� ��� �@f��� 	F� $7 PART_AKNReduced��PART_AKNReduced��$y�Visible=�$��0��
���   �$��1��+�����ا ��[ �@f��� ��ا ��� ��ا ��[ 	�� TextBlock_108��$��1��
���   �$��14(�$��Normal"�$��Center=�$8 1,0,2,0q�$
��Left=�$
��4, 0q�$+��%Top results from Autodesk and the Web������ Style_18��" �- P� 	Trigger_6�� �@J�IsMouseOver . . ��� 	Setter_36�� � ��
 ������� Rectangle_4��$��3��$	��425��$��3��8�� �� DockPanel_4��$��0��$��4��$��Stretch=�$��Stretch=�8�� .+��� $9 PART_AKNListBox��PART_AKNListBox��$
��Left=�$��0,0,0,0q�$	��Top=�$��Hidden=�$��0q�$= 0��$> 500000��$y�	Collapsed=�8�� ���� DataTemplate_1��.R��� $? mStackPanel��StackPanel_1��$	��414��$	��414��@ ���� Style_19��'_�       " _�.��� 	Setter_37�� � �� �� DataTemplate_6��.R��� StackPanel_7��.+��� TextBlock_109��$	��600��$
��Wrap=����� A _� 	ToolTip_1��$B RelativePoint=�$C 60��$	D 150������ *	Snippet+8)  .+��� TextBlock_7��#��� ��$
��Wrap=�$��WordEllipsis=�$��40��$
E Left=�$��3,0,20,0q��� 	Run_1��8�� ��� *Title+8)   �� 	Run_2��.�-- �� 	Run_3��
���   ���� *	Snippet+8)  �� StackPanel_3��$F 
Horizontal=�$��Right=�$��Stretch=�.+��� TextBlock_106��8�� $��Right=�$E Right=�$��0,0,20,0q����� *
Category+8)  �� TextBlock_102��8�� $��Stretch=�$E Right=�$��0,0,20,0q����� *PublishDate+8)  �� Separator_3�� P� 	Trigger_4�� �@J�IsMouseOver . . ��� 	Setter_34��$ mStackPanel�� � ��
 ������� 	Setter_41��$ mStackPanel�� �@�Cursor$
 Hand��]� $< PART_AKNWarning��PART_AKNWarning��$y�	Collapsed=�$��Stretch=�$��Stretch=�.+��� TextBlock_103��
���r���$��25,0,0,1q�$8 	0,25,0,25q�#��� ��$��Center=�$
��Left=�!No relevant hits for this query]� $< PART_AKNLoading��PART_AKNLoading��$y�Visible=�$��Stretch=�$��Stretch=�.+��� TextBlock_104��
���r���$��25,0,0,1q�$8 	0,25,0,25q�#��� ��$��Center=�$
��Left=�Loading results...]� $< PART_AKNOffline��PART_AKNOffline��$y�	Collapsed=�$��Stretch=�$��Stretch=�.+��� TextBlock_110��
���r���$��25,0,0,1q�$8 	0,25,0,25q�#��� ��$��Center=�$
��Left=�	Offline BSJB         v4.0.30319     l   p�  #~  ��   �  #Strings    ��   #US �    #GUID   $� �W  #Blob         W_�	   �%3      �  ^   �  !       �  <   �      A  
      +   �           `                       
       tm {m
 �� �� �� ) G8 |f
 �� �� � G* e�
 �s �� �� �m �m �m 	f 	� ?		 �	^	 �	� �	m �	^	 �	� �	� �	�	" 
f (� sX �� �� �� �� �� 
� � $�" r8 5� b� �� �� � $� E� p� �� �� �� m m k� � � � �& \!G! �!m �!m s"� �"� $m �m x$c$ �$ 1&�& L&�" �&8& �&� ['�
 �'�' (� /(� )�( ")� G)� �)� *�)
 �*�
 
+�
 �+�" �+�+ �,X& �,8 :-m
 �-�" 9.8" ^.8 0� �0� 3� l3�& �3G! �3* Q4m* �4�4* �4�4* �4�4 �68 �6� �78 �8�& �9�
 +:� \; �; �; #C� wD� �D �F� !J�I& JhJ �KKK }L�& �M� jN�I �N�I OX �O� P�& �R8& S8 >S8 �S8& 9U� CV� �V�& ?W	 �W� �W�) �W�& Z�Y& <\� �\8 8]� �^^	 �^^	 _^	 �i� Bm� tm�	 �m�	 Ln� Zn� Ros �p� CV Ht&t lv� w� 7w� hw� �w� �w� �x�x �x�x ���� ׋�� ���x ��x $��x C��x \��x u��x ���x ���x Č�� ،�� 指x ���x -�� O�8 b�8 ��}� ��}� ׍č��   ��� :���. ��j� ����. ��j� ؎̎
 ���
 ��
 )��
 9��
 m��
 ���
 ��� ���� ֏�� ㏳� ��m �̎ 7��� D�m. ��h�. ��j� Đm �  �� +�X y�f� ��� ��� ߑ� ;�� [��	 i��	 ��� ֒� �� >� ��� ��m" ۓ8& ��Y& �hJ 6�� ��� ��  �� C�� w�� ��� ٕ� 镹 �� +�m ?�� _�� p�� ʖ� G�� h�� +��	 ��� ��� Ƙ� ژ� ��� �� ��	 _��
 t��'� ��  ���   ֚m ��� ��
 /�m �j�
 ��m& ���Y" ��82 X�1�� ��  ��   坹 Ԟ� ��m �� T�m d��� ���� �� ��8 ���
 Šm ؠm �m a�� �� �� j�� ��m
 ע��  �8 .�8" H�8 z�� ��8 ��� ʣ�(& 棍" �8& i�� ���( ۤ� ��
 ���'
 ��' J�� f�� |�� ĥ� ӥ�( �� E��" Q��& ��8 ��� �� ��8 §� ���& ��G! &��
 :��
 X��" ���+ ��m Ũ8 Ш8
 ��č
 ��č
 g�� ��č
 ө��
 ꩐
 �� ��& "�8" U�8 v�� �� ˪�x 骇x ��m* ���4 ѫm ���� 2�m L�* n�&t ��� 9�� ��m" í� ���& ஍& �8 :�� Z� ��m� ��   ƯX ��	 ��m6 аİ �l �� ��� 	�� G�� ��� � �tm �� +�8 <�8 ~�f� ���� ֵ��
 �č �m& H�hJ& ~�hJ& ��8& ��G!& �G! ��( 2�KK ?�KK ]�KK k��S��   ��f� Ƿf� ��m ���" Ҹ�& �� ���I K�� ]�� f�� ��� ��� ���" ѻ�"  ��
 ��& "��& 1��& ]�� ��� ��8 ��8 �8 7�8& h�G! |��)& ��G!& �G! 4�� m�m z�8 ��� ���& ��G!& ��G!& �8& ��8&  �	& {��& ��� ��m U�� ��^	 ��KK ��f� 	�f�& r�G! ��m ��m: ����: r��� ��� <�8 c�m" l�8 ��� ��m ��m n�� 4� \�9� �s ��� ��� ��� %�� ��� �ȇx �ȇx ����           �   ,      E Q      u Q      � Q      � Q      � Q        � Q  ( *    � Q  . . � �    1 �   �   	 8 �   �    8 �    �  A �    0 L �    EQ  M �    \Q  M �    qQ  O �   �Q   O �   �Q   O    �Q  O    �Q  g 6  �   q K  �   s P  �Q  u V  Q  v [   Q ) x a  ,Q  y f  AQ  z �  RQ  � �  `Q t � �  wQ 5 � �  �Q  � �  �Q  � �  �Q  � �  �Q 
 � �   �Q  � �  �Q 	 � ��    Q   � ��   Q = � �      � U� -Q  � o	 ?Q E � r QQ  � r  XQ  � s  dQ  � x  n  M � �  yQ = � �  �Q  � �  �Q U � �  �Q Y  ,�   �Q    0  �Q U  8  �Q Y �� �Q  �   � �   6 �   A �   SQ  "�   aQ  '�  rQ  *�	 }Q E 1��   �Q   :�  �Q  :�  �Q  E�   � E�� �� F��   �Q   F�   �� Fb   )Q m Ho  >Q  Hq  EQ  O{  RQ q S�   gQ  S�   oQ  [��  �Q  ]�  �Q 	 ^� �Q  ^��   �Q   `��  �Q  `�   ��u b�   "Q  f� 1My q    0�   q	 ��   r	 �   s -�   u w�   x �   {  �   } |�    s�   � ��   � I�   � ��   � V�,
2 V�<
2 V�N
2 V�`
2 V�r
2 V��
2 V��
2 V��
2 V��
2 V��
2 V��
2 V��
2 V�2 V�2 V�&2 V�82 V�J2 V�\2 V�n2 V��2 V��2  "2  :7 W: l? �C �j F2  \2  s7 �� �2  �2  �2  �2  �j 	2  &2  F2  �2  �2  �2  �2  �2  �2  � �I �N ٜ�, 1��, t��, ���, (��, b��, ���, " �2  �2  �2  �2  �2  �   2  3 2 Q�� 2  � 2  � F � K  !O !2  #!2  h!U !U �!f �!f "$�Q��$2 Q��$2 Q��%7 )� ")� *)� 6)� Q)� b)� u)� �)� �)� �)� �)� �)� �)  �)  
*� *� -*� 9*� F*  Z*� e*� u*� �* l+' }+0 �+2  �+2  �+8 �+8 ,= ,B ,F $,F b,2  y,V �,q b,2  -  �-� �-2 6 L.� �32  �3� 42  42  +42  =42  Z4� �5f �-� 062  ^62 Q��62  �-� 72  72  272  :72  K7  �7 18) D83 9J Z9  �@  �@  9A  TA  �A� �A� �A  	B� B� 3B CB� XB� gB� ��jA ,C� FC� _C� rC� �C� �C� �C� �C� �C� �C� �C� D� D� 2D� ED2  TD2  �D� �D� �D3 vG  G2 V��G7V��G7V��G7V��G7V��G7V��G7V�H7V�H7V�+H7V�CH7V�NH7V�dH7V�{H2 V��H2 V��H2 V��H2 V��H2 V��H2  YI rIK �I �I7V��IKV��IKQ��I7 +Je ;J 6 GJ� �Jy �J �J~ �O  �O~ PX #P] 6PX GP] ^Pb tPb -  ���E ٜ`G ���I 躢I Q2  #Q2  0Q2  :Q2  HQ2  YQ2  fQ7 uQ~Q��R�Q��R� �R�6 �R�6 )S�6 �S�6 �S�6 >T�6 _T