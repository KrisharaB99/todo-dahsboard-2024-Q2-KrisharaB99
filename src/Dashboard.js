import styles from './Dashboard.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Dashboard = () => {

	const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  	return (
    		<div className={styles.dashboard}>
      			<div className={styles.headerNavigationV2}>
        				<div className={styles.headerNavigationV2Child} />
        				<div className={styles.ellipseParent}>
          					<img className={styles.frameChild} alt="" src="/Ellipse 6.png" />
          					<img className={styles.chevronDownIcon} alt="" src="Chevron-down.svg" />
        				</div>
        				<img className={styles.bellOffIcon} alt="" src="Bell-off.svg" />
        				<div className={styles.rightmenuParent}>
          					<div className={styles.rightmenu} />
          					<div className={styles.headerTitleParent}>
            						<div className={styles.headerTitle}>Dashboard</div>
            						<div className={styles.inputField} />
          					</div>
        				</div>
        				<div className={styles.primaryButton} />
        				<div className={styles.divider} />
      			</div>
      			<div className={styles.container}>
        				<div className={styles.bg} />
        				<div className={styles.pagination}>
          					<img className={styles.pageMaster} alt="" src="page / master.svg" />
          					<img className={styles.pageMaster1} alt="" src="page / master.png" />
          					<div className={styles.pageDefault}>
            						<div className={styles.pageDefault1}>
              							<div className={styles.num}>2</div>
            						</div>
          					</div>
          					<div className={styles.pageDefault2}>
            						<div className={styles.pageDefault1}>
              							<div className={styles.num}>3</div>
            						</div>
          					</div>
          					<div className={styles.pageActive}>
            						<div className={styles.pageActive1}>
              							<div className={styles.num2}>1</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.containerHeader}>
          					<div className={styles.divider1} />
          					<div className={styles.heading}>
            						<div className={styles.headingInner}>
              							<div className={styles.frameWrapper}>
                								<div className={styles.frameWrapper}>
                  									<div className={styles.headerName}>Tasks</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.item4}>
          					<div className={styles.divider1} />
          					<div className={styles.yourTotalGroceries}>Status</div>
          					<div className={styles.yourTotalGroceries1}>Task Name</div>
          					<div className={styles.yourTotalGroceries2}>Priority</div>
          					<div className={styles.yourTotalGroceries3}>Created by</div>
          					<div className={styles.yourTotalGroceries4}>Date</div>
        				</div>

						<div className={styles.item6}>
						{tasks.map(task => (
									<div className={styles.taskItem} key={task.id}>
									<div className={styles.iconContainer}>
										<img className={styles.CheckIconRoot} alt="" src={task.completed ? "check.png" : "minus.png"} />
									</div>
									<div className={styles.divider1} />
									<div className={styles.todo}>{task.todo}</div>
									<div className={styles.name}>{task.name}</div>
									<div className={styles.created}>{task.createdBy}</div>
									<div className={styles.priorityBadge}>{task.priority}</div>
									<div className={styles.date}>{new Date(task.createdAt).toLocaleDateString()}</div>
									</div>
								))}
						</div>
        				
      			</div>
      			<div className={styles.bgParent}>
        				<div className={styles.bg1} />
        				<div className={styles.containerHeader1}>
          					<div className={styles.divider11} />
          					<div className={styles.heading1}>
            						<div className={styles.frameParent}>
              							<div className={styles.frameWrapper}>
                								<div className={styles.frameWrapper}>
                  									<div className={styles.headerName}>Tasks Priorities</div>
                								</div>
              							</div>
              							<div className={styles.frameItem} />
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.legendSeriesParent}>
            						<div className={styles.legendSeries}>
              							<div className={styles.dot}>
                								<div className={styles.color} />
              							</div>
              							<div className={styles.series1}>High</div>
            						</div>
            						<div className={styles.legendSeries}>
              							<div className={styles.dot}>
                								<div className={styles.color1} />
              							</div>
              							<div className={styles.series1}>Medium</div>
            						</div>
            						<div className={styles.legendSeries}>
              							<div className={styles.dot}>
                								<div className={styles.color2} />
              							</div>
              							<div className={styles.series1}>Low</div>
            						</div>
          					</div>
          					<div className={styles.frameDiv}>
            						<div className={styles.frameInner} />
            						<div className={styles.frameChild1} />
            						<div className={styles.frameChild2} />
          					</div>
        				</div>
      			</div>
      			<div className={styles.container1}>
        				<div className={styles.bg2} />
        				<div className={styles.lineParent}>
          					<div className={styles.line} />
          					<div className={styles.line1} />
          					<div className={styles.groupParent}>
            						<img className={styles.groupIcon} alt="" src="Ellipse 7.png" />
            						<div className={styles.kushanthaCharukaCreatedContParent}>
              							<div className={styles.kushanthaCharukaCreatedContainer}>
                								<span>
                  									<span className={styles.kushanthaCharuka}>Kushantha Charuka</span>
                  									<span className={styles.created}>{` created `}</span>
                								</span>
                								<span className={styles.contract00124Need}>Contract #00124 need John Beige’s signature</span>
              							</div>
              							<div className={styles.sep162022}>Sep 16, 2022 at 11:30 AM</div>
            						</div>
          					</div>
          					<div className={styles.groupContainer}>
            						<img className={styles.groupIcon} alt="" src="Ellipse 9.png" />
            						<div className={styles.kushanthaCharukaCreatedContParent}>
              							<div className={styles.kushanthaCharukaCreatedContainer}>
                								<span>{`Lorem ipsum `}</span>
                								<span className={styles.kushanthaCharuka}>dolor sit amet,</span>
                								<span>{` consectetur adipiscing elit. `}</span>
                								<span className={styles.kushanthaCharuka}>Maecenas</span>
                								<span> pretium neque</span>
              							</div>
              							<div className={styles.sep162022}>Sep 16, 2022 at 11:45 AM</div>
            						</div>
          					</div>
          					<div className={styles.groupParent1}>
            						<img className={styles.groupIcon} alt="" src="Ellipse 9.png" />
            						<div className={styles.kushanthaCharukaCreatedContParent}>
              							<div className={styles.kushanthaCharukaCreatedContainer}>
                								<span>{`Lorem ipsum `}</span>
                								<span className={styles.kushanthaCharuka}>dolor sit amet,</span>
                								<span>{` consectetur adipiscing elit. `}</span>
                								<span className={styles.kushanthaCharuka}>Maecenas</span>
                								<span> pretium neque</span>
              							</div>
              							<div className={styles.sep162022}>Sep 16, 2022 at 11:45 AM</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.containerHeader2}>
          					<div className={styles.divider11} />
          					<div className={styles.heading2}>
            						<div className={styles.frameParent1}>
              							<div className={styles.frameWrapper}>
                								<div className={styles.frameWrapper}>
                  									<div className={styles.headerName}>Activity Feed</div>
                								</div>
              							</div>
              							<div className={styles.frameChild5} />
            						</div>
          					</div>
        				</div>
        				<div className={styles.rectangleParent6}>
          					<div className={styles.groupChild6} />
          					<div className={styles.groupChild7} />
        				</div>
      			</div>
      			<div className={styles.groupParent2}>
        				<img className={styles.frameChild6} alt="" src="Group 1770.svg" />
        				<img className={styles.closeIcon} alt="" src="Close.svg" />
        				<div className={styles.welcomeBackJohn}>Welcome back, John Doe</div>
        				<div className={styles.theEndOfContainer}>
          					<p className={styles.theEndOf}>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
            						<p className={styles.lookHereFor}>Look here for more information</p>
            						</div>
            						</div>
            						<div className={styles.sidebarNavigation}>
              							<div className={styles.sidebarNavigationChild} />
              							<div className={styles.sidebarNavigationItem} />
              							<img className={styles.metjipLogoWhite1Icon} alt="" src="metjip-logo-white 1.png" />
              							<div className={styles.frameParent2}>
                								<div className={styles.frameWrapper2}>
                  									<div className={styles.dashboardParent}>
                    										<img className={styles.chevronDownIcon} alt="" src="Dashboard.svg" />
                    										<div className={styles.text}>Dashboard</div>
                  									</div>
                								</div>
                								<div className={styles.frameWrapper3}>
                  									<div className={styles.dashboardParent}>
                    										<img className={styles.chevronDownIcon} alt="" src="Contacts.svg" />
                    										<div className={styles.text1}>Contacts</div>
                  									</div>
                								</div>
                								<div className={styles.frameWrapper3}>
                  									<div className={styles.dashboardParent}>
                    										<img className={styles.chevronDownIcon} alt="" src="Templates.svg" />
                    										<div className={styles.text}>Templates</div>
                  									</div>
                								</div>
                								<div className={styles.frameWrapper3}>
                  									<div className={styles.dashboardParent}>
                    										<img className={styles.chevronDownIcon} alt="" src="Contracts.svg" />
                    										<div className={styles.text}>Documents</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.acmySolutions}>Acmy Solutions</div>
              							<div className={styles.navFeaturedCard}>
                								<div className={styles.progressCircle}>
                  									<div className={styles.ring}>
                    										<div className={styles.background} />
                    										<div className={styles.line2} />
                    										<div className={styles.text4}>4/5</div>
                  									</div>
                								</div>
                								<div className={styles.textAndSupportingText}>
                  									<div className={styles.text5}>Used Contracts</div>
                  									<div className={styles.supportingText}>Your team has used 4/5 of your available contracts</div>
                								</div>
                								<div className={styles.textAndSupportingText1}>
                  									<div className={styles.text6}>Dismiss</div>
                  									<div className={styles.headerName}>Upgrade Plan</div>
                								</div>
              							</div>
              							<img className={styles.dividerIcon} alt="" src="Divider.svg" />
              							<div className={styles.sidebarNavigationInner}>
                								<div className={styles.dashboardParent}>
                  									<img className={styles.chevronDownIcon} alt="" src="Settings.svg" />
                  									<div className={styles.text}>Settings</div>
                								</div>
              							</div>
            						</div>
            						</div>);
          					};
          					
          					export default Dashboard;
          					